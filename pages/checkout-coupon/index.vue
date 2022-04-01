<template>
  <div class="checkout-coupon">
    <ul class="tab-list">
      <li class="tab" @click="changeTab(0)" :class="{active: status === 0}">可用({{canuseList.length}})</li>
      <li class="tab" @click="changeTab(1)" :class="{active: status === 1}">不可用({{notuseList.length}})</li>
    </ul>
   <template v-if="status === 0">
      <ul class="coupon-list" v-if="canuseList && canuseList.length">
        <li class="coupon" :key="index" v-for="(coupon,index) in canuseList" @click='toSelectCount(coupon)'>
          <div class="money">
            <span class="unit"></span>
            <span v-if="coupon.type==0">{{coupon.denomination}}元</span>
            <span v-else-if="coupon.type==1">{{coupon.denomination}}折</span>
            <div class="desc">满{{coupon.thresholdValue}}元可用</div>
          </div>
          <div class="coupon__name">{{coupon.name}}</div>
          <div class="coupon__rule">{{coupon.description}}</div>
          <div class="coupon__time">
            {{coupon.beginTime}} 至 {{coupon.endTime}}
          </div>
        </li>
      </ul>
      <div class="empty-wrap" v-if="status === 0 && !canuseList.length">
        <img src="https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1556375797799.png">
        <div class="title">很遗憾</div>
        <div class="desc">您暂时无可用的优惠券</div>
      </div>
    </template>
    <template v-if="status === 1">
      <ul class="coupon-list" v-if="notuseList && notuseList.length">
        <li class="coupon disabled" :key="index" v-for="(coupon,index) in notuseList">
          <div class="money">
            <span class="unit"></span>
            <span v-if="coupon.type==0">{{coupon.denomination}}元</span>
            <span v-else-if="coupon.type==1">{{coupon.denomination}}折</span>
            <div class="desc">满{{coupon.thresholdValue}}元可用</div>
          </div>
          <div class="coupon__name">{{coupon.name}}</div>
          <div class="coupon__rule">{{coupon.description}}</div>
          <div class="coupon__time">
            {{coupon.beginTime}} 至 {{coupon.endTime}}
          </div>
        </li>
      </ul>
      <div class="empty-wrap" v-if="status === 1 && !notuseList.length">
        <img src="https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1556375797799.png">
        <div class="desc">暂无已使用的优惠券</div>
      </div>
    </template>
  </div>
</template>

<script>
  import VUEX from "@/store/mutation-types.js"
  export default {
    data() {
      return {
        couponList: [],
        status: 0,
      }
    },
    computed: {
      notuseList() {
        if (State.checkout.couponData) {
          return State.checkout.couponData.cannotUsedList
        }
        return [];
      },
      canuseList() {
        if (State.checkout.couponData) {
          return State.checkout.couponData.canUsedList
        }
        return [];
      }
    },
    components: {},
    methods: {
      toSelectCount(coupon){
        console.info('coupon:', coupon)
        Store.commit(VUEX.CHECKOUT.SET_COUPON, coupon);
        wx.navigateBack();
      },
      changeTab(status) {
        this.status = status;
      },
      selectCoupon(coupon) {
        if (coupon.status != 0) {
          return false;
        }
        Store.commit(VUEX.CHECKOUT.SET_COUPON, coupon);
        wx.navigateBack();
      }
    },
    mounted() {

    },
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .checkout-coupon {
    .tab-list {
      display: flex;
      align-items: center;

      .tab {
        position: relative;
        flex: 1;
        height: rpx(80);
        line-height: rpx(80);
        font-size: rpx(30);
        text-align: center;
        border-bottom: rpx(2) solid transparent;

        &.active {
          color: $black;
          font-weight: 500;
          border-bottom: rpx(2) solid $black;
        }
      }
    }

    .coupon-list {
      padding-top: rpx(30);
      padding-left: rpx(40);
      padding-right: rpx(20);
      .coupon {
        position: relative;
        padding: rpx(30) rpx(30) rpx(30) rpx(216);
        margin-bottom: rpx(30);
        width: rpx(680);
        min-height: rpx(226);
        background: url(https://szyh-ecommerce-oss.oss-cn-zhangjiakou.aliyuncs.com/commerce/product/1624952173708.png) left top no-repeat;
        background-size: cover;

        &.disabled {
          background-image: url(https://szyh-ecommerce-oss.oss-cn-zhangjiakou.aliyuncs.com/commerce/product/1624952118838.png);

          .coupon__name {
            color: #999;
          }
        }

        .money {
          @include middle-center-y();
          left: 0;
          font-size: rpx(40);
          color: #fff;
          width: rpx(192);
          text-align: center;
          @include ellipsis();

          .unit {
            margin-right: rpx(-10);
            font-size: rpx(32);
          }

          .desc {
            font-size: rpx(22);
            line-height: rpx(30);
          }
        }

        .coupon__name {
          padding-top: rpx(30);
          padding-bottom: rpx(10);
          font-size: rpx(26);
          line-height: rpx(40);
          @include ellipsis();
          font-weight: bold;
        }
        .coupon__rule {
          padding-top: rpx(10);
          padding-bottom: rpx(10);
          font-size: rpx(24);
          line-height: rpx(30);
          @include ellipsis();
          font-weight: bold;
        }
        .coupon__time {
          padding-top: rpx(20);
          font-size: rpx(24);
          line-height: rpx(30);
          color: #999;
        }
      }
    }

    .empty-wrap {
      text-align: center;
      padding-top: rpx(300);

      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: rpx(210);
        height: rpx(130);
      }

      .title {
        padding-top: rpx(30);
        font-size: rpx(32);
        color: #999;
      }

      .desc {
        padding-top: rpx(10);
        color: #999;
        font-size: rpx(24);
      }
    }
  }
</style>
