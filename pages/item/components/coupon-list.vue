<style lang="scss">
  @import "~@/styles/base";

  .modal-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
  }

  .coupon-modal {
    @include middle-center-x();
    bottom: 0;
    width: rpx(750);
    height: rpx(910);
    background-color: #fff;
    .modal-header {
      position: relative;
      height: rpx(105);
      line-height: rpx(105);
      text-align: center;
      font-size: rpx(34);
      background-color: #fff;
      z-index: 100;
      color: $black;
      .btn-close {
        @include middle-center-y();
        right: rpx(30);
        width: rpx(30);
        height: rpx(30);
      }
    }

    .coupon-list {
      padding: rpx(30) rpx(40);
      height: rpx(705);
      background: #F6F5F5;
      .coupon {
        position: relative;
        padding: rpx(30) rpx(30) rpx(30) rpx(216);
        margin-bottom: rpx(30);
        width: rpx(670);
        min-height: rpx(226);
        background: url(../../../../static/images/item-detail/coupon-valid.png) left top no-repeat;
        background-size: cover;

        &.disabled {
          background-image: url(../../../../static/images/item-detail/coupon-invalid.png);

          .coupon__name {
            color: #999;
          }
        }

        .money {
          @include middle-center-y();
          left: 0;
          font-size: rpx(50);
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
          padding-right: rpx(120);
          padding-bottom: rpx(10);
          font-size: rpx(32);
          line-height: rpx(45);
          @include ellipsis();
          font-weight: bold;
        }

        .coupon__time {
          padding-top: rpx(20);
          font-size: rpx(22);
          line-height: rpx(30);
          color: #999;
        }

        .btn-status {
          position: absolute;
          padding-top: rpx(30);
          padding-left: rpx(50);
          padding-right: rpx(50);
          right: 0;
          width: rpx(114);
          top: 0;
          bottom: 0;
          font-size: rpx(32);
          color: $main-color;
          font-weight: bold;
          border-left: 1px solid $border;
        }
      }
    }

    .empty-wrap {
      text-align: center;
      padding-top: rpx(300);
      height: rpx(705);
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

    .btn-confirm {
      @include btn-block();
    }
  }
</style>

<template>
  <div v-if="showPopup" class="modal-wrap">
    <div class="coupon-modal">
      <div class="modal-header">
        可领取优惠券
        <img class="btn-close" src="../../../../static/images/item-detail/close.png" @click="show(false)">
      </div>
      <scroll-view class="coupon-list" v-if="couponList && couponList.length">
        <li class="coupon" :key="index" v-for="(coupon,index) in couponList">
          <div class="money">
            <span class="unit">¥</span>
            <span v-if="coupon.type==0">{{coupon.denomination}}元</span>
            <span v-else-if="coupon.type==1">{{coupon.denomination}}折</span>
            <div class="desc">满{{coupon.thresholdValue}}元可用</div>
          </div>
          <div class="coupon__name">{{coupon.name}}</div>
          <div class="coupon__time">
            {{coupon.beginTime | date}}至{{coupon.endTime | date}}
          </div>
          <div class="btn-status" @tap="toCoupon(coupon)">
            {{coupon.receivedState === 1 ? '已领取' : '立即领取'}}
          </div>
        </li>
      </scroll-view>
      <div class="empty-wrap" v-if="!couponList.length">
        <img src="../../../../static/images/item-detail/coupon-empty.png">
        <div class="title">很遗憾</div>
        <div class="desc">您暂时无可领取的优惠券</div>
      </div>
      <div class="btn-confirm" @click="show(false)">完成</div>
    </div>
  </div>
</template>

<script>
  import date from 'filters/date'
  import wx from 'utils/wx'
import Axios from "@/config/axios.js"
  export default {
    name: 'COUPON_LIST',
    props: {
      couponList: {
        type: Array,
        default: [],
      }
    },
    data() {
      return {
        showPopup: false,
      }
    },
    filters: {
      date,
    },
    methods: {
      async toCoupon(coupon) {
        if (coupon.isReceived === 1) {
          return false;
        }
        wx.showLoading();
        const result = await Axios.post('/coupon/receive', {
          couponId: coupon.couponId,
        })
        wx.hideLoading();
        if (result.result.result == 1) {
          wx.showToast(result.result.message);
          this.$emit('loadCoupon')
        } else {
          wx.showToast(result.result.message);
        }
      },
      show(flag) {
        this.showPopup = flag;
      }
    },
    async mounted() {
    }
  }
</script>
