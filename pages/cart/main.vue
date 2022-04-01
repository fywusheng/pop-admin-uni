<style lang="scss">
  @import "~@/styles/base";

  body {
    background-color: #F6F5F5;
  }

  .btn-edit {
    background-color: transparent;
    font-size: rpx(28);
    line-height: rpx(40);
  }

  .item-list {
    .item {
      position: relative;
      padding: rpx(40) rpx(60) rpx(40) rpx(260);
      height: rpx(240);
      background-color: #fff;
      margin-bottom: rpx(20);
      .btn-delete {
        position: absolute;
        right: rpx(30);
        top: rpx(40);
        width: rpx(30);
        height: rpx(30);
        z-index: 1000;
      }
      &.disabled {
        .item-name, .sku-name, .item-price {
          color: #999;
        }

        .item-logo {
          &:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: rgba(0, 0, 0, .3);
          }
        }
      }

      .checkbox {
        @include middle-center-y();
        left: rpx(30);

        .icon-img {
          width: rpx(40);
          height: rpx(40);
        }
      }

      .item-logo {
        @include middle-center-y();
        left: rpx(80);
        width: rpx(160);
        height: rpx(160);
        @include background-image();

        .sale-out {
          @include middle-center();
          width: rpx(110);
          height: rpx(110);
          z-index: 10;
        }
      }

      .item-name {
        padding-bottom: rpx(18);
        font-size: rpx(28);
        line-height: rpx(40);
        @include ellipsis();
      }

      .sku-name {
        padding-top: rpx(8);
        font-size: rpx(24);
        line-height: rpx(33);
        color: $extra-black;
      }

      .item-price {
        padding-top: rpx(30);
        font-size: rpx(28);
      }

      .number-wrap {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: rpx(26);
        right: rpx(30);

        .number {
          padding: rpx(10);
          font-size: rpx(24);
          width: rpx(60);
          text-align: center;
        }

        button {
          position: relative;
          width: rpx(50);
          height: rpx(50);
          //border-radius: 50%;
          //@include border-radius(25, $gray);
          background-color: transparent;

          .icon-img {
            @include middle-center();
            width: rpx(40);
            height: rpx(40);
          }
        }
      }
    }
  }

  .group-all {
    .group-header {
      background-color: $gray;
    }
  }

  .cart-footer-block {
    height: rpx(100);
  }

  .cart-footer {
    @include middle-center-x(fixed);
    bottom: 0;
    width: rpx(750);
    height: rpx(100);
    background-color: $white;
    z-index: 1000;

    .checkbox {
      display: flex;
      align-items: center;
      @include middle-center-y();
      left: rpx(30);
      font-weight: bold;
      font-size: rpx(26);
      color: #111;

      .icon-img {
        margin-right: rpx(15);
        width: rpx(40);
        height: rpx(40);
      }
    }

    .total {
      @include middle-center-y();
      right: rpx(282);
      text-align: right;

      .total-price {
        font-size: rpx(32);
        line-height: rpx(54);
        color: $black;
        font-weight: bold;
      }

      .coupon-price {
        font-size: rpx(24);
        color: #666666;
      }
    }

    .btn-account {
      @include middle-center-y();
      right: 0;
      @include btn();
      width: rpx(250);
    }

    .btn-collect, .btn-delete {
      @include middle-center-y();
      right: 0;
      @include btn-block();
      width: rpx(250);

      &.disabled {
        background-color: #DADADA;
      }
    }

    .btn-collect {
      right: rpx(250);
      background-color: $main-color;

      &.disabled {
        border-right: 1px solid #fff;
      }
    }
  }

  .empty-wrap {
    @include middle-center();

    .icon-img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: rpx(150);
      height: rpx(220);
    }

    .desc {
      line-height: rpx(90);
      margin-bottom: rpx(50);
      font-size: rpx(30);
      color: $light-black;
      text-align: center;
    }

    .btn-home {
      @include btn-round();
      width: rpx(350);
    }
  }
</style>

<template>
  <div id="app">
    <template v-if="isLogin">
      <template v-if="loading || itemList.length">
        <ul class="item-list">
          <li class="item border-b" :class="{disabled: !item.soldOut}" v-for="item in itemList" :key="item.id">
            <div class="checkbox" @click="changeCheck(item)" v-if="item.soldOut">
              <img class="icon-img" v-if="item.checked" src="/static/images/common/select_h.png">
              <img class="icon-img" v-else src="/static/images/common/select_n.png">
            </div>
            <div class="item-logo" @click="tolDetail(item)" :style="{backgroundImage: 'url('+item.imgUrl+')'}">
              <img  v-if="!item.soldOut" class="sale-out" src="/static/images/common/sale-out.png">
            </div>
            <div class="item-name" @click="tolDetail(item)">{{item.pName}}</div>
            <div class="sku-name" @click="tolDetail(item)">{{item.skuName}}</div>
            <div class="item-price">¥ {{item.price}}</div>
            <img class="btn-delete" src="/static/images/cart/delete.png" @click="deleteItem(item)">
            <div class="number-wrap" v-if="item.soldOut">
              <button type="button" @click="reduceNum(item)">
                <img class="icon-img" src="/static/images/cart/icon-reduce.png">
              </button>
              <div class="number">{{item.num}}</div>
              <button type="button" @click="addNum(item)">
                <img class="icon-img" src="/static/images/cart/icon-add.png">
              </button>
            </div>
          </li>
        </ul>
        <div class="cart-footer-block"></div>
        <div class="cart-footer">
          <div class="checkbox" @click="changeSelectAll">
            <img class="icon-img" v-if="selectAll" src="/static/images/common/select_h.png">
            <img class="icon-img" v-else src="/static/images/common/select_n.png">
            全选
          </div>
          <div class="total">
            <span class="total-price">¥{{totalPayablePrice}}</span>
            <div class="coupon-price">优惠金额:¥{{discountAmount}}</div>
          </div>
          <button type="button" class="btn-account" @click="checkout">结算({{totalNum}})</button>
        </div>
      </template>
      <div class="empty-wrap" v-else>
        <img class="icon-img" src="/static/images/cart/empty.png">
        <div class="desc">您还没有选购商品</div>
        <button type="button" @click="toHome" class="btn-home" slot="slot">去挑选</button>
      </div>
    </template>
    <div class="empty-wrap" v-else>
      <div class="desc">您还没有登录</div>
      <button type="button" @click="toLogin" class="btn-home" slot="slot">去登录</button>
    </div>
  </div>
</template>

<script>
  import wx from 'utils/wx'
  import Axios from '@/config/axios.js'
  import XIU from "@/utils/index.js"; 
  export default {
    name: 'CART',
    data() {
      return {
        selectAll: false,
        itemList: [],
        loading: true,
        totalAmountPrice: 0,
        isEdit: false,
        totalNum: 0,
        discountAmount: 0,
        totalPayablePrice: 0
      }
    },
    computed: {
      isValidBtn() {
        return this.itemList.some(item => {
          return item.checked
        })
      },
      isLogin(){
        return Store.getters.isLogin;
      }
    },
    components: {},
    methods: {
      toHome() {
        wx.switchTab({
          url: '/pages/index/main'
        })
      },
      toLogin(){
        wx.navigateTo({
          url: '/pages/login/main'
        })
      },
      clickRight() {
        this.isEdit = !this.isEdit;
      },
      async changeCheck(item) {
        const result = await Axios.post('/cart/check', {
          checked: item.checked ? 0 : 1,
          skuIds: [item.skuId],
        })
        if (result.code == 200) {
          item.checked = !item.checked;
          this.recountCheck();
        }
        this.loadData();
      },
      addNum(item) {
        item.num++;
        this.changeNumber(item);
      },
      reduceNum(item) {
        if (item.num > 1) {
          item.num--;
          this.changeNumber(item);
        }
      },
      async changeNumber(item) {
        wx.showLoading('正在提交...');
        const result = await Axios.post('/cart/updateNum', {
          skuId: item.skuId,
          num: item.num,
        })
        wx.hideLoading();
        if (result.code == 200) {
          this.loadData();
        }else{
          item.num--;
          wx.showToast(result.msg || result.data);
        }
      },
      async loadData() {
        this.loading = true;
        wx.showLoading();
        const result = await Axios.get('/cart/list');
        wx.hideLoading();
        if (result.code == 200) {
          if (!result.data.carts) {
            this.itemList = [];
          } else {
            this.itemList = result.data.carts.item;
          }
          this.totalAmountPrice = result.data.totalAmountPrice;
          this.discountAmount = result.data.discountAmount;
          this.totalPayablePrice = result.data.totalPayablePrice;
          this.totalNum = result.data.totalNum;
          this.recountCheck();
        } else {
          wx.showToast(result.msg || '获取购物车信息失败');
        }
        this.loading = false;
      },
      async changeSelectAll() {
        this.selectAll = !this.selectAll;
        const skuIds = [];
        this.itemList.forEach(item => {
          if (item.checked !== this.selectAll) {
            skuIds.push(item.skuId);
          }
        })
        const params = {
          checked: this.selectAll ? 1 : 0,
          skuIds: skuIds
        }

        const result = await Axios.post('/cart/check', JSON.stringify(params))
        if (result.code != 200) {
          wx.showToast(result.msg || result.data);
        }
        this.loadData();
      },
      recountCheck() {
        this.selectAll = this.itemList.length > 0 && this.itemList.every(item => {
          return item.checked;
        })
      },
      tolDetail(product) {
        XIU.bridge.goItem(product.productId)
      },
      deleteItem(product) {
        wx.showModal({
          content: '确定删除?',
          success: async res => {
            if(res.confirm){
              const result = await Axios.post('/cart/delete', {
                skuId: product.skuId,
              })
              if (result.code == 200) {
                wx.showToast('删除成功')
                this.loadData();
              } else {
                wx.showToast(result.msg || '删除失败');
              }
            }
          }
        })
      },
      checkout() {
        const flag = this.itemList.some(item => {
          return item.checked
        })
        if (!flag) {
          wx.showToast('请选择商品');
          return;
        }
        wx.navigateTo({
          url: '/pages/checkout/main?type=1'
        })
      }
    },
    async onShow() {
      if(!Store.getters.isLogin){
        await Store.dispatch('login')
      }
      this.loadData();
    }
  }
</script>
