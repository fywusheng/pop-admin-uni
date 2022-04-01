<style lang="scss">
  @import "~@/styles/base";

  .page-order-info {
    padding-bottom: rpx(88);

    .order-header {
      padding: rpx(30);
      background-color: $main-color;

      .status {
        position: relative;
        padding-top: rpx(10);
        padding-bottom: rpx(20);
        font-size: rpx(32);
        font-weight: 500;
        color: #fff;

        .total-price {
          @include middle-center-y();
          font-size: rpx(24);
          right: 0;

          span {
            padding-left: rpx(10);
            padding-right: rpx(5);
            font-size: rpx(34);
          }
        }
      }

      .pay-count-down {
        padding-top: rpx(25);
        font-size: rpx(26);
        color: #fff;
      }
    }

    .receive-info {
      padding: rpx(30);

      .name {
        position: relative;
        font-size: rpx(30);
        color: $black;
        font-weight: 500;

        .phone {
          @include middle-center-y();
          right: 0;
        }
      }

      .address {
        padding-top: rpx(30);
        font-size: rpx(28);
        line-height: rpx(40);
        color: $extra-light-black;
      }
    }

    .store-list {
      padding-left: rpx(30);

      .store-name {
        font-size: rpx(30);
        height: rpx(86);
        line-height: rpx(86);
        font-weight: 500;
        border-bottom: rpx(1) solid $border;
      }

      .item-list {
        .item {
          position: relative;
          padding: rpx(30) rpx(30) rpx(20) rpx(180);
          min-height: rpx(220);
          .item-logo {
            position: absolute;
            top: rpx(30);
            left: 0;
            width: rpx(169);
            height: rpx(179);
            border: rpx(1) solid $border;
          }

          .item-name {
            padding-left: rpx(20);
            font-size: rpx(30);
            font-weight: 500;
            @include ellipsis;
          }

          .sku-name {
            padding-left: rpx(20);
            margin-top: rpx(30);
            font-size: rpx(26);
            color: $light-black;
            .item-state {
              @include middle-center-y();
              right: rpx(30);
              font-size: rpx(28);
              color: $extra-black;
            }
            .item-state-label{
            color: $extra-light-black;
            font-size: rpx(24);
            }
          }

          .item-price {
            padding-left: rpx(20);
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
            margin-top: rpx(10);
            width: rpx(120);
            height: rpx(50);
            line-height: rpx(45);
            text-align: center;
            border: 1px solid #666;
            border-radius: 5px;
            color: #666;
            font-size: rpx(24);
          }
        }
      }

      .remark-wrap {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding-top: rpx(30);
        padding-bottom: rpx(30);
        border-top: rpx(1) dashed $border;
        line-height: 1.4;

        .title {
          font-size: rpx(28);
          font-weight: 500;
        }

        .value {
          margin-left: rpx(10);
          font-size: rpx(28);
          color: $extra-light-black;
        }
      }
    }

    .cost-list {
      padding-left: rpx(30);

      .cost {
        height: rpx(110);
        line-height: rpx(110);
        border-bottom: rpx(1) solid #F1F1F1;
        font-size: rpx(30);
        font-weight: 500;

        .value {
          padding-right: rpx(30);
          float: right;
          color: $extra-light-black;
          font-weight: normal;

          span {
            color: $main-color;
          }
        }
      }
    }

    .info-list {
      padding-left: rpx(30);
      padding-top: rpx(35);
      padding-bottom: rpx(35);

      .info-list-title {
        padding-bottom: rpx(30);
        font-size: rpx(30);
        font-weight: 500;
      }

      .info {
        font-size: rpx(28);
        line-height: rpx(50);
        color: $extra-light-black;
      }
    }

    .footer-btn-list {
      display: flex;
      align-items: center;
      @include middle-center-x(fixed);
      bottom: 0;
      width: 100%;
      background-color: #fff;

      &.isIphoneHair {
        padding-bottom: rpx(68);
      }

      li {
        @include btn();
        flex: 1;

        &:first-child {
          background-color: #fff;
          border-top: rpx(1) solid $border;
          color: $black;
        }
      }
    }
  }
</style>
<template>
  <div class="page-order-info" v-if="!loading">
    <div class="order-header">
      <div class="status">{{order.orderStatusLabel}}
        <div class="total-price">
          {{order.orderStatus === 10 || order.orderStatus === 90 ? '应付':'实付'}}
          <span>¥{{order.payableAmount}}</span>
        </div>
      </div>
      <div class="pay-count-down" v-if="order.orderStatus == 10">
        订单将于{{minutes}}分{{seconds}}秒后被取消，请尽快支付！
      </div>
      <div class="pay-count-down" v-if="order.orderStatus == 30">
        请确认收货，系统将于<span>&nbsp;{{hours}}小时{{minutes}}分后自动确认</span>
      </div>
    </div>
    <div class="receive-info">
      <div class="name">{{order.receiveName}}<span class="phone">{{order.receiveMobilePhone}}</span></div>
      <div class="address">收货地址:{{order.receiveProvinceName + order.receiveCityName + order.receiveAreaName +
        order.receiveAddress}}
      </div>
    </div>
    <div class="line"></div>
    <div class="store-list" v-for="(orderItemModel,index) in order.storeOrderItems" :key="index">
      <!--div class="store-name">{{orderItemModel.storeName}}</div-->
      <ul class="item-list">
        <li class="item" @click="toItem(item)" :key="itemIndex" v-for="(item,itemIndex) in orderItemModel.items">
          <img class="item-logo" mode="aspectFit" :lazy-load="true" :src="item.imgUrl">
          <div class="item-name">{{item.productName}}</div>
          <div class="sku-name">{{item.skuName}}
            <div class="item-state" v-if="order.orderStatus == 30 || order.orderStatus == 40 || order.orderStatus == 50">
              <button v-if="item.itemStatus == 1" type="button" class="btn-link" @click.stop="toService(order, item)">
                申请售后
              </button>
              <div v-else class="item-state-label">{{item.itemStateStr}}</div>
            </div>
          </div>
          <div class="item-price">¥{{item.sellingPrice}}
            <div class="item-qty">X{{item.skuQuantity}}</div>
          </div>
        </li>
      </ul>
      <div class="remark-wrap" v-if="isMulti">
        <div class="title">备注留言:</div>
        <div class="value">{{orderItemModel.receiveRemark || '无'}}&nbsp;</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="cost-list">
      <div class="cost">商品总价: <span class="value">¥{{order.orderAmount}}</span></div>
      <div class="cost">运费: <span class="value">¥{{order.freightAmount}}</span></div>
      <div class="cost">优惠券: <span class="value">¥{{order.couponAmount}}</span></div>
      <div class="cost">积分:
        <div class="value">预计获得<span>{{order.points}}</span>积分</div>
      </div>
    </div>
    <template v-if="!isMulti">
      <div class="line"></div>
      <div class="info-list">
        <div class="info-list-title">备注</div>
        <div class="info">{{order.storeOrderItems && order.storeOrderItems[0].receiveRemark || '无'}}</div>
      </div>
    </template>
    <div class="line"></div>
    <div class="info-list" v-if="order.invoiceTitle">
      <div class="info-list-title">发票</div>
      <li class="info">发票类型:<span>{{order.invoiceType == 0 ? '电子普通发票':'增值税专用发票'}}</span></li>
      <li class="info">发票抬头:<span>{{order.invoiceTitle}}</span></li>
      <template v-if="order.applicantType === 1">
        <li class="info">纳税识别号:<span>{{order.identifyingCode}}</span></li>
      </template>
      <template v-if="order.invoiceType  === 1">
        <li class="info">开户银行名称:<span>{{order.bankName}}</span></li>
        <li class="info">单位开户账号:<span>{{order.bankAccount}}</span></li>
        <li class="info">单位注册地址:<span>{{order.registrationAddress}}</span></li>
        <li class="info">单位电话号码:<span>{{order.registrationPhone}}</span></li>
      </template>
      <template v-if="order.invoiceType  === 0">
        <li class="info">收票人手机号码:<span>{{order.recipientPhone}}</span></li>
        <li class="info">收票人电子邮箱:<span>{{order.recipientEmail}}</span></li>
      </template>
      <template>
        <li class="info">发票内容:<span>{{order.invoiceContent}}</span></li>
      </template>
    </div>
    <div class="info-list">
      <div class="info">订单编号: <span class="value">{{order.orderId}}</span></div>
      <div class="info">下单时间: <span class="value">{{order.createdTime}}</span></div>
      <div class="info" v-if="order.completionTime">完成时间: <span class="value">{{order.completionTime}}</span></div>
    </div>
    <div class="line"></div>
    <ul class="footer-btn-list" :class="{isIphoneHair: isIphoneHair}">
      <li @click="remove" v-if="order.orderStatus === 10 || order.orderStatus === 20">取消订单</li>
      <li @click="toLogistics" v-if="order.orderStatus === 30">查看物流</li>
      <li @click="confirm" v-if="order.orderStatus === 30">确认收货</li>
      <li v-if="order.orderStatus === 10" @click="toPay">付款</li>
    </ul>
  </div>
</template>

<script>
  import timeFormat from 'utils/time-format'
  import wx from 'utils/wx'
  import XIU from "@/utils/index.js"; 
import Axios from "@/config/axios.js"
  export default {
    data() {
      return {
        loading: true,
        order: {},
        hours: 0,
        minutes: 0,
        seconds: 0,
        countDown: 0,
        isIphoneHair: App.isIphoneHair,
      }
    },
    computed: {
      isMulti() {
        return this.order && this.order.orderItemModels && this.order.orderItemModels.length > 1;
      }
    },
    components: {},
    methods: {
      toService(order, item) {
        if (order.orderStatus == 20 || item.itemStatus > 1) {
          wx.navigateTo({
            url: `../refund-detail/main?type=1&itemId=${item.productId}&num=${item.skuQuantity}&orderId=${order.id}`
          })
        } else {
          wx.navigateTo({
            url: `../service-type/main?itemId=${item.id}&num=${item.skuQuantity}&orderId=${order.id}`
          })
        }
      },
      async toPay() {
        wx.showLoading({title: '正在获取...', mask: true});
        const result = await Axios.post('/payment/sign', {
          orderId: this.order.orderId,
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
              wx.showModal({
                icon: 'none',
                title: '支付成功',
                showCancel: false,
                success: () => {
                  this.loadData();
                }
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
      toLogistics(){

      },
      async remove() {
        const result = await wx.showModal({
          title: '',
          content: '确定要取消?',
        })
        if (result.confirm) {
          wx.showLoading('正在提交...');
          const delResult = await Axios.post('/order/cancel', {
            orderId: this.order.orderId,
          })
          wx.hideLoading()
          if (delResult.code == 200) {
            wx.showToast(delResult.msg || '取消成功');
            this.loadData();
          } else {
            wx.showToast(delResult.msg || '取消失败');
          }
        }
      },
      async confirm() {
        const result = await wx.showModal({
          title: '',
          content: '确定已收货?',
        })
        if (result.confirm) {
          wx.showLoading('正在提交...');
          const delResult = await Axios.post('/order/confirm', {
            orderId: this.order.orderId,
          })
          wx.hideLoading()
          if (delResult.code == 200) {
            wx.showToast(delResult.msg || '确认成功');
            this.loadData();
          } else {
            wx.showToast(delResult.msg || '确认失败');
          }
        }
      },
      invoiceContent(type) {
        switch (parseInt(type || 0)) {
          case 1:
            return '服装、鞋帽'
          case 2:
            return '箱包'
          case 3:
            return '礼品、办公用品'
          case 4:
            return '订单商品明细'
          default:
            return ''
        }
      },
      async loadData() {
        this.loading = true;
        wx.showLoading();
        const result = await Axios.get('/order/get', {
          params: {
            orderId: this.id,
          }
        })
        wx.hideLoading()
        this.loading = false;
        if (result.code == 200) {
          result.data.createTime = timeFormat.fetch(result.data.createTime, '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}')
          if (result.data.completionTime) {
            result.data.completionTime = timeFormat.fetch(result.data.completionTime, '{YYYY}-{MM}-{DD} {HH}:{mm}:{ss}')
          }
          result.data.invoiceContent = this.invoiceContent(result.data.invoiceContent)
          this.order = result.data;
          if (this.order.orderStatus === 10) {
            this.countDown = this.order.payCountDown;
            this.initCountDown();
          }
          if (this.order.orderStatus === 30) {
            this.countDown = this.order.completionCountDown;
            this.initCountDown();
          }
        } else {
          wx.showToast(result.result.message)
        }
      },
      initCountDown() {
        this.countDownTask = setInterval(() => {
          if (this.countDown <= 0) {
            clearInterval(this.countDownTask);
            return;
          }

          this.hours = parseInt(this.countDown / 1000 / 60 / 60);
          this.minutes = parseInt(this.countDown / 1000 / 60) % 60;
          this.seconds = parseInt(this.countDown / 1000) % 60;
          this.countDown -= 1000;
        }, 1000)
      },
      toItem(data) {
        XIU.bridge.goItem(data.productId)
      }
    },
    onUnload() {
      clearInterval(this.countDownTask);
      this.order = {};
    },
    async onShow() {
      this.id = this.$root.$mp.query.id;
      if (!Store.getters.isLogin) {
        await Store.dispatch('login')
      }
      this.loadData();
    },
  }
</script>