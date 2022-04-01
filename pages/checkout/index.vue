<style lang="scss">
  @import "~@/styles/base";

  body {
    background-color: $gray;
  }
  .page-checkout {
    padding-bottom: rpx(118);
    &.isIphoneHair {
      padding-bottom: rpx(182);
      .checkout-footer {
        padding-bottom: rpx(64);
        box-sizing: content-box!important;
      }
    }
  }
  .checkout-address {
    position: relative;
    margin-top: rpx(20);
    padding: rpx(35) rpx(60) rpx(35) rpx(70);
    background-color: #fff;
    height: rpx(200);
    overflow: hidden;

    .add-tip {
      @include middle-center-x();
      top: rpx(30);
      font-size: rpx(32);
      text-align: center;
      color: $extra-black;

      img {
        display: block;
        margin-bottom: rpx(10);
        width: rpx(60);
        height: rpx(70);
        margin-right: auto;
        margin-left: auto;
      }
    }

    .icon-you {
      @include middle-center-y();
      right: rpx(30);
      width: rpx(36);
      height: rpx(36);
      z-index: 100;
    }

    .user-info {
      display: flex;
      align-items: center;
      font-size: rpx(28);
      color: $black;
      line-height: rpx(40);
      font-weight: bold;

      .name {
        margin-right: rpx(50);
        max-width: rpx(300);
        @include ellipsis();
      }

      .phone {
        max-width: rpx(200);
        @include ellipsis();
      }
    }

    .address-info {
      position: relative;
      margin-top: rpx(30);
      padding-right: rpx(37);
      font-size: rpx(26);
      color: $extra-light-black;
      line-height: rpx(34);
      @include ellipsis();
    }

    .icon-address {
      position: absolute;
      bottom: rpx(65);
      left: rpx(30);
      width: rpx(32);
      height: rpx(32);
    }

    .line {
      @include middle-center-x();
      bottom: 0;
      width: rpx(764);
      height: rpx(10);
    }
  }

  .item-list-wrap {
    margin-top: rpx(20);
    padding-bottom: rpx(10);
    background-color: #fff;

    .store-name {
      padding: rpx(20) rpx(30);
      font-size: rpx(28);
      color: $black;
      border-bottom: rpx(1) solid $border;
      font-weight: 500;
    }

    .item-list {
      padding: rpx(20) rpx(30);

      .item {
        position: relative;
        margin-bottom: rpx(30);
        padding-left: rpx(180);
        padding-right: rpx(20);
        height: rpx(160);

        &:last-child {
          margin-bottom: 0;
        }

        .item-logo {
          @include middle-center-y();
          left: 0;
          width: rpx(160);
          height: rpx(160);
          @include background-image();
          border: 1px solid #F1F1F1;
        }

        .item-name {
          font-size: rpx(26);
          line-height: rpx(42);
          @include ellipsis();
        }

        .sku-name {
          padding-top: rpx(20);
          font-size: rpx(24);
          color: $extra-black;
        }

        .number {
          position: absolute;
          right: 0;
          bottom: 0;
          font-size: rpx(28);
          color: $black;
        }

        .item-price {
          padding-top: rpx(30);
          font-size: rpx(28);
          color: $black;
          font-weight: bold;
          font-family: Akrobat ExtraBold;
          span {
            margin-right: rpx(5);
            font-size: rpx(24);
          }
        }
      }
    }

    .remark-wrap {
      display: flex;
      align-items: center;
      position: relative;
      font-size: rpx(30);
      margin-left: rpx(30);
      margin-right: rpx(30);

      span {
        width: rpx(85);
        font-size: rpx(26);
        color: $black;
      }

      input {
        display: block;
        width: rpx(635);
        height: rpx(88);
        line-height: rpx(88);
        color: $extra-light-black;
        font-size: rpx(26);

        &::-webkit-input-placeholder {
          color: #CCCCCC;
        }
      }
    }
  }

  .info-list {
    margin-top: rpx(20);
    padding-left: rpx(30);
    background-color: #fff;

    .info {
      position: relative;
      display: flex;
      align-items: center;
      padding-right: rpx(30);
      height: rpx(100);
      border-bottom: rpx(1) solid #F1F1F1;

      .content {
        @include middle-center-y();
        right: rpx(80);
        color: $extra-light-black;
        font-size: rpx(28);
        max-width: rpx(400);
        @include ellipsis();
        font-family: Akrobat ExtraBold;
      }

      .name {
        min-width: rpx(70);
        margin-right: rpx(50);
        font-size: rpx(28);
        color: $black;
        font-weight: 500;

        &.point {
          font-size: rpx(28);
        }
      }

      .icon-you {
        @include middle-center-y();
        right: rpx(30);
        width: rpx(36);
        height: rpx(36);
      }
    }
  }

  .price-list {
    margin-top: rpx(20);
    padding: rpx(35) rpx(30);
    background-color: #fff;

    .price {
      position: relative;
      margin-bottom: rpx(35);

      &:last-child {
        margin-bottom: 0;
      }

      .title {
        font-size: rpx(28);
        color: $black;
      }

      .price-value {
        @include middle-center-y();
        right: 0;
        font-size: rpx(26);
        color: $extra-light-black;

        &.red {
          color: #EC202B;
        }
      }
    }
  }
  .pay-type-list {
    margin-top: 20rpx;
    padding-left: 30rpx;
    background-color: #fff;
    .pay-type {
      position: relative;
      display: flex;
      align-items: center;
      height: 100rpx;
      font-size: 26rpx;
      border-bottom: 1rpx solid #ddd;
      &:last-child {
        border-bottom: none;
      }
      .icon {
        width: 36rpx;
        height: 36rpx;
        margin-right: 15rpx;
      }
      .check-icon {
        @include middle-center-y();
        right: 30rpx;
        width: 40rpx;
        height: 40rpx;
        &.disabled {
          opacity: .4;
          background-color: #ddd;
        }
      }
      .switch-icon {
        @include middle-center-y();
        right: 20rpx;
      }
    }
  }
  .checkout-footer {
    display: flex;
    align-items: center;
    @include middle-center-x(fixed);
    bottom: 0;
    width: rpx(750);
    background-color: $white;
    z-index: 1000;

    .total {
      padding-left: rpx(30);
      width: rpx(526);
      font-size: rpx(26);
      line-height: rpx(33);
      color: $extra-light-black;
      .unit {
        margin-right: 5rpx;
        margin-left: rpx(20);
        font-size: rpx(24);
        font-family: Akrobat ExtraBold;
      }
      .total-price {
        font-size: rpx(38);
        color: $black;
        font-weight: bold;
        font-family: Akrobat ExtraBold;
      }
    }

    .btn-account {
      @include btn();
      width: rpx(224);
    }
  }
  /*swtich整体大小及背景色*/
  .wx-switch-input{
    width:75rpx !important;
    height:39rpx !important;
    background: rgb(65, 223, 125) !important;
    border: rgb(53, 155, 84) !important;
  }
  /*白色样式（false的样式）*/
  .wx-switch-input::before{
    width:75rpx !important;
    height: 39rpx !important;
    background: #F3F3F3 !important;
    border: #888888 !important;
  }
  /* 中间的小圆球 */
  /*绿色样式（true的样式）*/
  .wx-switch-input::after{
    width: 39rpx !important;
    height: 39rpx !important;
  }
</style>

<template>
  <div class="page-checkout" :class="{isIphoneHair}">
    <div class="checkout-address" @click="selectAddress">
      <img class="icon-you" src="/static/images/checkout/right.png">
      <template v-if="settlement.addressId">
        <div class="user-info">
          <div class="name">{{settlement.receiveName}}</div>
          <div class="phone">{{settlement.receivePhone}}</div>
        </div>
        <img class="icon-address" src="/static/images/checkout/address.png">
        <div class="address-info">
          收货地址：{{(settlement.receiveProvinceName || '') + (settlement.receiveCityName || '') +
          (settlement.receiveAreaName || '') + (settlement.receiveDistrictName || '') + settlement.receiveAddress }}
        </div>
      </template>
      <template v-else>
        <div class="add-tip" @click.stop="toAddAddress">
          <img src="/static/images/checkout/icon-add.png">
          请添加收货地址
        </div>
      </template>
      <img class="line" src="/static/images/checkout/line@2x.png">
    </div>
    <div class="item-list-wrap" v-for="(store,index) in storeList" :key="index">
      <div class="store-name border-b">{{store.storeName}}</div>
      <ul class="item-list">
        <li class="item" v-for="(item,subIndex) in store.settlementItems" :key="subIndex">
          <div class="item-logo" :style="{backgroundImage: 'url('+item.skuImgUrl+')'}"></div>
          <div class="item-name">{{item.productName}}</div>
          <div class="sku-name">{{item.productAttributeStr}}</div>
          <div class="item-price"><span class="unit">¥</span>{{item.sellingPrice}}</div>
          <div class="number">x{{item.quantity}}</div>
        </li>
      </ul>
      <div class="remark-wrap">
        <span>留言</span>
        <input type="text" maxlength="32" placeholder="建议留言前，先与商家沟通" @change="changeRemark($event, index)">
      </div>
    </div>
    <ul class="info-list">
      <li class="info border-b" @click="toCoupon">
        <span class="name">卡券:</span>
        <span class="content" v-if="coupon">{{coupon.name}}</span>
        <img class="icon-you" src="/static/images/checkout/right-gray.png">
        <coupon-list @setCoupon="setCoupon" :canuseList="canuseList" :notuseList="notuseList"
                     ref="coupon"></coupon-list>
      </li>
      <!-- <li class="info border-b" v-if="settlement.userPoint">
      <span class="name point">可使用{{settlement.userPoint}}积分抵扣¥{{settlement.userPointPrice}}</span>
      <van-switch v-model="usePoint"></van-switch>
      </li> -->
      <li class="info border-b" @click="toInvoice">
        <span class="name">发票:</span>
        <span class="content">
          <template v-if="invoice">
            {{invoice.showContent}}
          </template>
          <template v-else>不开发票</template>
        </span>
        <img class="icon-you" src="/static/images/checkout/right-gray.png">
      </li>
    </ul>
    <ul class="price-list">
      <li class="price">
        <div class="title">商品总价</div>
        <div class="price-value">¥{{settlement.totalAmountPrice}}</div>
      </li>
      <li class="price">
        <div class="title">运费</div>
        <div class="price-value red">+¥{{settlement.totalFreightAmount}}</div>
      </li>
      <li class="price" v-if="settlement.totalDiscountAmount > 0">
        <div class="title">优惠金额</div>
        <div class="price-value red">-¥{{settlement.totalDiscountAmount}}</div>
      </li>
    </ul>
    <ul class="pay-type-list">
      <li class="pay-type">
        <img class="icon" src="/static/images/common/pay-balance.png">账户余额，共{{balance}}元
        <switch :checked="isUseBalanceState" color='#000000' @change="useBalanceSettlement" class="switch-icon"/>
        <!-- <img @click="changeBalance" v-if="useBalance" class="check-icon" src="/static/images/common/checkbox.png">
        <img @click="changeBalance" v-else class="check-icon"  :class="{disabled: balance == 0}" src="/static/images/common/checkbox-default.png"> -->
      </li>
    </ul>
    <ul class="pay-type-list">
      <li class="pay-type">
        <img class="icon" src="/static/images/common/pay-wechat.png">
        微信支付
        <img class="check-icon" src="/static/images/common/checkbox.png">
      </li>
    </ul>


    <!-- <ul class="pay-type-list">
      <li class="pay-type">
        <img class="icon" src="/static/images/common/pay-balance.png">
        余额支付(余额:{{balance}})
        <img @click="changeBalance" v-if="useBalance" class="check-icon" src="/static/images/common/checkbox.png">
        <img @click="changeBalance" v-else class="check-icon"  :class="{disabled: balance == 0}" src="/static/images/common/checkbox-default.png">
      </li>
      <li class="pay-type">
        <img class="icon" src="/static/images/common/pay-wechat.png">
        微信支付
        <img class="check-icon" src="/static/images/common/checkbox.png">
      </li>
    </ul> -->
    <div class="checkout-footer">
      <div class="total">合计:<span class="unit">¥</span><span class="total-price">{{settlement.pendingPaymentAmount}}</span></div>
      <button type="button" class="btn-account" @click="account">确认订单</button>
    </div>
  </div>
</template>

<script>
  import VUEX from "@/store/mutation-types.js"
  import Axios from "@/config/axios.js"
  export default {
    name: "CHECKOUT",
    data() {
      return {
        isIphoneHair: App.isIphoneHair,
        loading: true,
        isInvoice: false,
        userPoint: false,
        isUseBalanceState:false,
        userInfo: null,
        canuseList: [],
        notuseList: [],
        usePoint: false,
        balance: 0
      };
    },

    computed: {
      coupon(){
        return State.checkout.coupon
      },
      type() {
        return State.checkout.type;
      },
      invoice() {
        return State.checkout.invoice;
      },
      settlement() {
        return State.checkout.settlement || {}
      },
      storeList() {
        if (State.checkout.settlement) {
          return State.checkout.settlement.settleStoreList
        }
        return [];
      },
    },
    components: {},
    methods: {
      async useBalanceSettlement(e){
        this.isUseBalanceState = e.target.value
        Store.commit(VUEX.CHECKOUT.SET_BALANCE, e.target.value)
      },
      setCoupon(data){
        Store.commit(VUEX.CHECKOUT.SET_COUPON, data);
      },
      // changeBalance(){
      //   if(!this.useBalance && this.balance > 0){
      //     this.useBalance = true;
      //   }else{
      //     this.useBalance = false;
      //   }
      // },
      toCoupon(){
        wx.navigateTo({
          url: '/pages/checkout-coupon/main'
        })
      },
      toInvoice(){
        wx.navigateTo({
          url: '/pages/checkout-invoice/main'
        })
      },
      toAddAddress(){
        wx.navigateTo({
          url: '/sub-pages/me/address-add/main?type=1'
        })
      },
      selectAddress(){
        wx.navigateTo({
          url: '/sub-pages/me/address-list/main?type=1'
        })
      },
      changeRemark(e, index) {
        Store.commit(VUEX.CHECKOUT.CHANGE_REMARK, {index, remark: e.mp.detail.value})
      },
      account() {
          Store.dispatch('toPay')
      }
    },
    onUnload() {
      Store.commit(VUEX.CHECKOUT.RESET_STATE)
    },
    async mounted() {
      if(!Store.getters.isLogin){
        await Store.dispatch('login')
      }
      const type = this.$root.$mp.query.type;
      Store.commit(VUEX.CHECKOUT.SET_TYPE, type - 0);
      if (State.checkout.type === 2) {
        Store.commit(VUEX.CHECKOUT.SET_DIRECT_DATA, {
          num: this.$root.$mp.query.num,
          skuId: this.$root.$mp.query.skuId
        })
      }
      if(State.checkout.coupon){
        State.checkout.coupon = {}
      }
      this.isUseBalanceState = false
      // await Store.commit(VUEX.CHECKOUT.SET_BALANCE, false)
      await Store.dispatch('getCheckoutData');
      const walletAccount = await Axios.get('/member/wallet/getTotalBalance')
      if (walletAccount.code == 200) {
        this.balance = walletAccount.data.balance;
      }
      if (!State.checkout.addressId) {
        wx.showModal({
          content: '您没有设置收货地址，请选择...',
          success: res => {
            if (res.confirm) {
              wx.navigateTo({
                url: '/sub-pages/me/address-add/main?type=1'
              })
            }
          }
        })
      }
    }
  };
</script>
