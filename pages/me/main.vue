<style lang="scss">
  @import "~@/styles/base";

  body {
    padding-bottom: rpx(50);
    background-color: $extra-light-gray;
  }

  .top-banner {
    padding: rpx(20) rpx(16) 0;
    background-color: #fff;

    .user-info {
      position: relative;
      padding: rpx(60) rpx(30) rpx(25);
      box-sizing: border-box;
      height: rpx(280);
      width: rpx(718);
      // background: url(https://xiu-obs.obs.cn-south-1.myhuaweicloud.com/1555251174483.png) center no-repeat;
      background: black;
      background-size: cover;
      color: #fff;
      border-top-left-radius: rpx(16);
      border-top-right-radius: rpx(16);

      .user-name {
        padding-left: rpx(124);
        padding-bottom: rpx(15);
        font-size: rpx(34);
        line-height: rpx(48);
        height: rpx(48);
      }

      .mobile, .login-btn {
        padding-left: rpx(124);
        font-size: rpx(24);
        line-height: rpx(33);
      }

      .login-btn {
        display: flex;
        align-content: center;
        font-size: rpx(22);

        img {
          margin-top: rpx(10);
          margin-left: rpx(15);
          width: rpx(12);
          height: rpx(22);
        }
      }

      .head-menu-list {
        display: flex;
        padding-top: rpx(60);

        .menu {
          flex: 1;
          font-size: rpx(20);
          line-height: rpx(28);
          text-align: center;
          image{
            width: 30rpx;
            height: 30rpx;
          }

          .value {
            font-size: rpx(30);
            line-height: rpx(42);
          }
        }
      }

      .user-icon {
        position: absolute;
        left: rpx(30);
        top: rpx(40);

        .img {
          width: rpx(104);
          height: rpx(104);
          border-radius: 50%;
          @include background-image();
          background-size: cover;
          background-image: url(https://xiu-mini.oss-cn-beijing.aliyuncs.com/user-logo.png);
        }
      }
    }
  }

  .order-menu-list {
    background-color: #fff;
    padding-top: 30rpx;
    .order-type-title {
      position: relative;
      border-bottom: 1rpx solid #eee;
      padding: 20rpx 30rpx;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 42rpx;
      font-size: 30rpx;
      .btn-right {
        @include middle-center-y();
        right: 20rpx;
        display: flex;
        align-items: center;
        img {
          margin-left: 10rpx;
          width: 25rpx;
          height: 25rpx;
        }
      }
    }
    .order-type-list {
      display: flex;
      justify-content: space-between;
      .order-type {
        position: relative;
        flex: 1;
        text-align: center;
        padding-top: 30rpx;
        padding-bottom: 30rpx;
        .count {
          position: absolute;
          right: 25rpx;
          top: 20rpx;
          width: 32rpx;
          height: 32rpx;
          line-height: 32rpx;
          text-align: center;
          border-radius: 50%;
          background-color: #CF1133;
          color: #fff;
          font-size: 20rpx;
        }
        .icon {
          display: block;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 12rpx;
          width: 54rpx;
          height: 54rpx;
        }
        .name {
          font-size: 22rpx;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000000;
          line-height: 30rpx;
        }
      }
    }
  }

  .menu-list {
    margin-top: rpx(20);
    padding-left: rpx(35);
    padding-right: rpx(35);
    background-color: #fff;

    .menu {
      position: relative;
      height: rpx(104);
      line-height: rpx(104);
      font-size: rpx(26);
      color: #121212;
      background-color: #fff;
      text-align: left;
      padding-left: 0;
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .icon-right {
        width: 30rpx;
        height: 30rpx;
      }

      .contact-btn {
        height: rpx(104);
        line-height: rpx(104);
        font-size: rpx(26);
        color: #121212;
        background-color: #fff;
        text-align: left;
      }

      img {
        position: absolute;
        top: rpx(34);
        right: 0;
        width: rpx(36);
        height: rpx(36);
      }
    }
  }
</style>

<template>
  <div id="app">
    <div class="top-banner">
      <div class="user-info">
        <div class="user-icon">
          <div class="img" v-if="userInfo.picUrl" :style="{backgroundImage: 'url('+userInfo.picUrl+')'}"></div>
          <div class="img" v-else></div>
        </div>
        <div class="user-name">{{userInfo.nickName || '-'}}</div>
        <div v-if="!userInfo.phone" class="mobile" @tap="login">
          <div>尚未绑定手机号,点击绑定</div>
        </div>
        <!-- <div v-else class="mobile">{{userInfo.phone}}</div> -->
        <ul class="head-menu-list">
          <li class="menu" @click="toMenu('my-count')">
            <div class="value">{{balance}}</div>
            余额
          </li>
          <li class="menu" @click="toMenu('my-point')">
            <div class="value">{{points || '-'}}</div>
            积分
          </li>
          <!-- <li class="menu" @click="toMenu('my-coupon')">
            <div class="value">{{orderResult.coupon || '-'}}</div>
            卡券
          </li> -->
        </ul>
      </div>
    </div>
    <div class="order-menu-list">
      <div class="order-type-title" @click="toOrder(0)">
        我的订单 <div class="btn-right"><img src="/static/images/common/right.png"/></div>
      </div>
       <ul class="order-type-list">
      <li class="order-type" @click="toOrder(10)">
        <img class="icon"  src="/static/images/me/wait-pay.png">
        <div class="name">待付款</div>
        <div class="count" v-if="orderResult.s10">{{orderResult.s10}}</div>
      </li>
      <li class="order-type" @click="toOrder(20)">
        <img  class="icon" src="/static/images/me/wait-ship.png">
        <div class="name">待发货</div>
        <div class="count" v-if="orderResult.s20">{{orderResult.s20}}</div>
      </li>
      <li class="order-type" @click="toOrder(30)">
        <img class="icon"  src="/static/images/me/wait-receive.png">
        <div class="name">待收货</div>
        <div class="count" v-if="orderResult.s30">{{orderResult.s30}}</div>
      </li>
      <li class="order-type" @click="toOrder(40)">
        <img class="icon"  src="/static/images/me/wait-comment.png">
        <div class="name">待评价</div>
        <div class="count" v-if="orderResult.s40">{{orderResult.s40}}</div>
      </li>
         <li class="order-type" @click="toOrder(999)">
        <img class="icon"  src="/static/images/me/refund-and-services.png">
        <div class="name">售后服务</div>
        <div class="count" v-if="orderResult.s999">{{orderResult.s999}}</div>
      </li>
    </ul>
    </div>
    <ul class="menu-list">
      <li class="menu" @click="toAddress">
        收货地址
        <img class="icon-right" src="/static/images/common/right.png">
      </li>
      <li class="menu" @click="toMenu('my-point')">
        我的积分
        <img class="icon-right" src="/static/images/common/right.png">
      </li>
      <li class="menu" @click="toMenu('my-coupon')">
        我的卡券
        <img class="icon-right" src="/static/images/common/right.png">
      </li>
      <li class="menu" @click="toMenu('my-collect')">
        收藏关注
        <img class="icon-right" src="/static/images/common/right.png">
      </li>
      <li class="menu">
        <button class="contact-btn" open-type="contact"> 联系客服</button>
        <img class="icon-right" src="/static/images/common/right.png">
      </li>
      <li class="menu" @click="toTopic('help_app')">
        帮助中心
        <img class="icon-right" src="/static/images/common/right.png">
      </li>
<!--      <li class="menu" @click="toMenu('feedback')">-->
<!--        意见反馈-->
<!--        <img src="/static/images/common/right.png">-->
<!--      </li>-->
    </ul>
  </div>
</template>

<script>
  import Axios from '@/config/axios.js';
  import XIU from "@/utils/index.js"; 
  import Store from "@/store/index.js";
  export default {
    name: 'USER_CENTER',
    data() {
      return {
        userInfo: {},
        points: 0,
        balance: 0,
        orderResult: {},
      }
    },
    computed: {
      isLogin(){
        return Store.getters.isLogin;
      }
    },
    components: {},
    methods: {
      toAddress() {
        wx.navigateTo({
          url: '/sub-pages/me/address-list/main?type=2'
        })
      },
      toHome() {
        XIU.bridge.goHome()
      },
      toTopic(id) {
        XIU.bridge.goTopic(id)
      },
      login() {
        wx.navigateTo({
          url: '/pages/login/main'
        })
      },
      toOrder(status) {
        if(status === 999){
          wx.navigateTo({
            url: '/sub-pages/me/refund-list/main'
          })
        }else{
          wx.navigateTo({
            url: '/sub-pages/me/order-list/main?status=' + status || 0
          })
        }
      },
      toMenu(name) {
        if(!Store.getters.isLogin){
          wx.navigateTo({
            url: '/pages/login/main'
          })
          return false;
        }
        wx.navigateTo({
          url: `/sub-pages/me/${name}/main`
        })
      },
    },
    async onShow() {
      if(!Store.getters.isLogin){
        await Store.dispatch('login')
      }
      const orderResult = await Axios.get('/order/get.count')
      if (orderResult.code == 200) {
        this.orderResult = orderResult.data;
      }
      const result = await Axios.post('/member/get.userinfo', {}, {
        headers: {
          'content-type': 'application/json;charset=utf-8',
        }
      })
      if (result.code == 200) {
        this.userInfo = result.data;
      }
      const pointResult = await Axios.get('/member/points.accumulation')
      if (pointResult.code == 200) {
        this.points = pointResult.data.points;
      }

      const walletAccount = await Axios.get('/member/wallet/getTotalBalance')
      if (walletAccount.code == 200) {
        this.balance = walletAccount.data.balance;
      }
    }
  }
</script>
