<template>
  <div class="page-order-list">
    <ul class="tab-list">
      <li class="tab" @click="changeStatus(0)" :class="status === 0 ? 'active':''">
        <div class="name">全部</div>
      </li>
      <li class="tab" @click="changeStatus(10)" :class="status === 10 ? 'active':''">
        <div class="name">待付款</div>
      </li>
      <li class="tab" @click="changeStatus(20)" :class="status === 20 ? 'active':''">
        <div class="name">待发货</div>
      </li>
      <li class="tab" @click="changeStatus(30)" :class="status === 30 ? 'active':''">
        <div class="name">待收货</div>
      </li>
      <li class="tab" @click="changeStatus(40)" :class="status === 40 ? 'active':''">
        <div class="name">待评价</div>
      </li>
    </ul>
    <ul class="order-list">
      <li class="order" @click="toDetail(order)"  v-for="(order,parentIndex) in orderList" :key="parentIndex">
        <div class="order-header">
          订单号:{{order.orderId}}
          <div class="status" :class="{red: order.status === 10}">{{order.orderStatusLabel}}</div>
        </div>
        <ul class="item-list">
            <li class="item" :key="itemIndex" v-for="(item,itemIndex) in order.itemList">
              <img class="item-logo" mode="aspectFit" :lazy-load="true" :src="item.imgUrl">
              <div class="item-name">{{item.productName}}</div>
              <div class="sku-name">{{item.skuName}}</div>
              <div class="item-price">¥{{item.sellingPrice}} <div class="item-qty">X{{item.skuQuantity}}</div></div>
            </li>
        </ul>
        <div class="order-footer">
          共{{order.totalQuantity}}件商品
          <span class="total-price">合计¥{{order.payableAmount}}</span>
        </div>
        <div class="footer-btn" @click.stop="">
          <div class="btn-active" @click="confirm(order)" v-if="order.orderStatus === 30">确认收货</div>
          <div class="btn-active" @click="toPay(order)" v-if="order.orderStatus === 10">付款</div>
          <!-- <div class="btn-link" @click="remove(order)" v-if="order.orderStatus < 30">取消订单</div> -->
          <div class="btn-link" @click="logistics(order)"
               v-if="order.orderStatus > 20 && order.orderStatus < 90 && order.orderStatus !== 60">查看物流
          </div>
          <div class="btn-link" @click="toDetail(order)">查看详情</div>
        </div>
      </li>
    </ul>
    <div class="empty" v-if="!loading && !orderList.length">
      <img src="/static/images/common/empty.png">
      暂无订单数据
      <div class="btn-home" @click="toHome">逛逛更多好货</div>
    </div>
  </div>
</template>

<script>
  import wx from 'utils/wx'
  import XIU from "@/utils/index.js";
   import Axios from "@/config/axios.js"
  export default {
    data() {
      return {
        orderList: [],
        status: 0,
        pageNum: 1,
        loading: true,
      }
    },
    components: {},
    methods: {
      toHome(){
        XIU.bridge.goHome();
      },
      logistics(order) {
        wx.navigateTo({
          url: '../logistics/main?id=' + order.orderId
        })
      },
      toService(item, order) {
        App.currentOrder = order;
        if (order.status == 20 || item.status > 1) {
          wx.navigateTo({
            url: `../refund-detail/main?type=1&itemId=${item.itemId}&num=${item.skuQty}`
          })
        } else {
          wx.navigateTo({
            url: `../service-type/main?itemId=${item.itemId}&num=${item.skuQty}`
          })
        }
      },
      async toPay(order) {
        //const {code} = await wx.login();
        wx.showLoading({title: '正在获取...', mask: true});
        const result = await Axios.post('/payment/sign', {
            orderId: order.orderId,
          paymentMethodCode: 'wechatxcx',
            code: State.login.openid,
        })
        wx.hideLoading()
        if (result.code == 200) {
          wx.requestPayment({
            timeStamp: result.data.timeStamp,
            nonceStr: result.data.nonceStr,
            package: result.data.package,
            signType: 'MD5',
            paySign: result.data.paySign,
            success: () => {
              wx.navigateTo({
                url: `../order-detail/main?id=${order.orderId}`
              })
            },
          })
        } else {
          wx.showToast({
            title: result.msg || '获取失败',
            icon: 'none'
          });
        }
      },
      async remove(order) {
        const result = await wx.showModal({
          title: '',
          content: '确定要取消?',
        })
        if (result.confirm) {
          wx.showLoading({title: '正在提交...', mask: true});
          const delResult = await Axios.post('/order/cancel', {
              orderId: order.orderId,
          })
          wx.hideLoading()
          if (delResult.code == 200) {
            setTimeout(() => {
              wx.showToast({
                title: delResult.msg || '操作成功',
                icon: 'none'
              });
            }, 1500)
            this.changeStatus(this.status)
          } else {
            wx.showToast({
              title: delResult.msg || '操作失败',
              icon: 'none'
            });
          }
        }
      },
      async confirm(order) {
        const result = await wx.showModal({
          title: '',
          content: '确定已收货?',
        })
        if (result.confirm) {
          wx.showLoading('正在提交...');
          const delResult = await Axios.post('/order/confirm', {
            orderId: order.orderId,
          })
          wx.hideLoading()
          if (delResult.code == 200) {
            setTimeout(() => {
              wx.showToast({
                title: delResult.msg || '确认成功',
                icon: 'none'
              });
            }, 1500)
            this.changeStatus(this.status)
          } else {
            wx.showToast(delResult.msg || '确认失败');
          }
        }
      },
      changeStatus(status) {
        this.status = status;
        this.all_loaded = false;
        this.orderList = [];
        this.pageNum = 1;
        this.loadData();
      },
      async loadData() {
        if (this.all_loaded) {
          return false;
        }
        const params = {
          pageNum: this.pageNum++,
          numPerPage: 10,
        }
        if (this.status > 0) {
          params.status = this.status;
        }
        this.loading = true;
        wx.showLoading();
        const result = await Axios.get('/order/list', {
          params
        })
        wx.hideLoading()
        if (result.code == 200) {
          ( result.data.list || []).forEach(data => {
            const itemList = [];
            data.storeOrderItems.forEach(orderItemModel => {
              orderItemModel.items.forEach(item => {
                item.imgUrl = XIU.getImgFormat(item.imgUrl, '/resize,w_400');
                itemList.push(_.pick(item, ['imgUrl','productId','productName','skuName','sellingPrice','skuQuantity','payableAmount']))
              })
            })
            const tempData = _.pick(data,['orderId','orderStatus','totalQuantity','orderType','orderAmount', 'orderStatusLabel','payableAmount'] )
            tempData.itemList = itemList;
            this.orderList.push(tempData)
          })
          this.all_loaded = result.data.pageNum >= result.data.totalPage;
        } else {
          wx.showToast(result.msg)
        }
        this.loading = false;
      },
      toDetail(data) {
        wx.navigateTo({
          url: `/sub-pages/me/order-detail/main?id=${data.orderId}`
        })
      },
      toItem(item) {
        wx.navigateTo({
          url: `/pages/item/main?id=${item.productId}`
        })
      }
    },
    onReachBottom() {
      this.loadData();
    },
    async mounted() {
      if(!Store.getters.isLogin){
        await Store.dispatch('login')
      }
      this.status = parseInt(this.$root.$mp.query.status || 0);
      this.changeStatus(this.status)
    },
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .page-order-list {
    padding-top: rpx(88);
    background-color: $gray;
    min-height: 100vh;
    .tab-list {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      display: flex;
      align-items: center;
      background-color: #fff;
      z-index: 1000;

      .tab {
        position: relative;
        flex: 1;
        text-align: center;

        .name {
          display: inline-block;
          height: rpx(88);
          line-height: rpx(88);
          padding-left: rpx(18);
          padding-right: rpx(18);
          font-size: rpx(28);
          color: $light-black;
          border-bottom: rpx(6) solid transparent;
        }

        &.active {
          .name {
            font-size: rpx(32);
            color: $black;
            border-bottom-color: $black;
          }
        }
      }
    }

    .order-list {
      .order {
        position: relative;
        margin-top: rpx(20);
        padding-left: rpx(30);
        background-color: #fff;

        .order-header {
          position: relative;
          height: rpx(85);
          line-height: rpx(85);
          font-size: rpx(28);
          color: $black;
          border-bottom: rpx(1) solid $border;
          .status {
            @include middle-center-y();
            right: rpx(30);
            color: $main-color;
            font-weight: 500;
            &.red {
              color: $red;
            }
          }
        }

        .item-list {
          .item {
            position: relative;
            padding: rpx(30) rpx(30) rpx(20) rpx(180);
            .item-logo {
              position: absolute;
              top: rpx(30);
              left: 0;
              width: rpx(159);
              height: rpx(159);
              border: rpx(1) solid $border;
            }

            .item-name {
              font-size: rpx(26);
              font-weight: 500;
              @include ellipsis;
            }

            .sku-name {
              padding-top: rpx(20);
              font-size: rpx(24);
              color: $light-black;
            }

            .item-price {
              position: relative;
              margin-top: rpx(30);
              font-size: rpx(30);
              color: $black;
              font-weight: 500;
              .item-qty {
                @include middle-center-y();
                right: rpx(30);
                font-size: rpx(28);
                color: $extra-black;
              }
            }
            .btn-link {
              position: absolute;
              bottom: rpx(30);
              right: rpx(30);
              font-size: rpx(26);
              text-decoration: underline;
              color: $extra-black;
            }
          }
        }

        .order-footer {
          text-align: right;
          padding: rpx(20) rpx(30) rpx(30);
          font-size: rpx(28);
          color: $extra-black;
          .total-price {
            margin-left: rpx(10);
            color: $black;
            font-weight: 500;
          }
        }

        .footer-btn {
          display: flex;
          flex-direction: row-reverse;
          padding: rpx(30);
          border-top: rpx(1) dashed $border;
          .btn-link, .btn-active {
            display: inline-block;
            margin-left: rpx(20);
            height: rpx(68);
            line-height: rpx(68);
            border-radius: rpx(8);
            text-align: center;
            width: rpx(180);
            font-size: rpx(28);
            color: $black;
            border: rpx(1) solid $border;
          }

          .btn-active {
            background-color: $black;
            color: #fff;
          }
        }
      }
    }
  }
</style>
