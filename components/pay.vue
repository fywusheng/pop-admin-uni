<template>
  <div class="pay-modal" v-if="showModal">
    <div class="modal">
      <div class="modal-title">选择支付方式</div>
      <ul class="pay-type-list">
        <li class="pay-type">
          <img class="radio" @click="changeBalanceSwitch" v-if="useBalance" src="/static/images/common/radio-active.png">
          <img class="radio" @click="changeBalanceSwitch" v-else src="/static/images/common/radio.png">
          余额支付
          <input class="money" v-model="payBalance" @change="changeBalance" type="number" :placeholder="'账户余额'+balance+'元'">
        </li>
        <li class="pay-type">
          <img class="radio" v-if="useWechat" src="/static/images/common/radio-active.png">
          <img class="radio" v-else src="/static/images/common/radio.png">
          微信支付
        </li>
      </ul>
      <div class="btn-confirm" @click="toPay">确定</div>
    </div>
  </div>
</template>

<script>
	import Axios from "@/config/axios.js"
export default {
  name: "pay",
  data() {
    return {
      showModal: false,
      useBalance: false,
      useWechat: true,
      balance: 0,
      payBalance: ''
    }
  },
  async mounted(){},
  methods: {
    changeBalance() {
      if (this.payBalance >= this.maxBalance) {
        this.payBalance = this.maxBalance;
        this.useWechat = false;
      }else{
        this.useWechat = true;
      }
    },
    async toPay(){
      const params = {
        orderId: this.orderId,
        paymentMethodCode: 'wechatxcx',
        code: State.login.openid,
      }
      const balanceList = `${this.payBalance}`.split('.');
      console.info(balanceList)
      if(balanceList.length === 2 && balanceList[1].length > 2){
        wx.showToast({
          icon: 'none',
          title: '余额最小为两位小数'
        })
        this.payBalance = 0;
        return false;
      }
      if (this.useBalance && this.payBalance > 0) {
        params.cashAmount = this.payBalance;
      }
      wx.showLoading({
        title: '正在提交...'
      })
      const payResult = await Axios.post('/payment/sign', params)
      wx.hideLoading()
      if (payResult.code == 200) {
        wx.requestPayment({
          timeStamp: payResult.data.timeStamp,
          nonceStr: payResult.data.nonceStr,
          package: payResult.data.package,
          signType: 'MD5',
          paySign: payResult.data.paySign,
          success: () => {
            wx.redirectTo({
              url: `/sub-pages/me/order-list/main?status=0`
            })
          },
          fail: () => {
            wx.redirectTo({
              url: `/sub-pages/me/order-list/main?status=0`
            })
          }
        })
      } else {
        wx.showToast({
          title: payResult.msg || '获取失败',
          icon: 'none'
        });
      }
    },
    changeBalanceSwitch(){
      this.useBalance = !this.useBalance;
      if(this.useBalance){
        this.orderInfo.price > this.balance && (this.useWechat = true);
      }else{
        this.useWechat = false;
      }
    },
    async show(flag, orderId){
      if(flag){
        this.orderId = orderId;
        const orderResult = await Axios.get('/order/get?orderId='+this.orderId);
        if (orderResult.code == 200) {
          this.orderInfo = orderResult.data;
        }
        const balanceResult = await Axios.get('/member/getAccountBalance');
        if (balanceResult.code == 200) {
          this.balance = balanceResult.data.plb;
          if(this.balance == 0){
            // this.toPay();
            // return false;
          }
          if (this.balance < this.orderInfo.payableAmount) {
            this.maxBalance = this.balance;
            this.payBalance = this.maxBalance;
          }
          if (this.balance >= this.orderInfo.payableAmount) {
            this.maxBalance = this.orderInfo.payableAmount;
            this.payBalance = this.orderInfo.payableAmount;
          }
        }
      }
      this.showModal = flag;
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~@/styles/base";

  .pay-modal {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 10000;
    .modal {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      padding: 0 30rpx env(safe-area-inset-bottom);

      .modal-title {
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        font-size: 30rpx;
        color: #000;
        font-weight: bold;
      }
      .pay-type-list {
        padding-bottom: 100rpx;
        .pay-type {
          display: flex;
          align-items: center;
          height: 100rpx;
          font-size: 28rpx;
          color: #000;
          border-bottom: 1px solid $border;
          .radio {
            margin-right: 10rpx;
            width: 36rpx;
            height: 36rpx;
          }
          .money {
            margin-left: 50rpx;
            border: 1px solid #000;
            height: 60rpx;
            line-height: 60rpx;
            width: 300rpx;
            padding-left: 20rpx;
            font-size: 30rpx;
            border-radius: 4rpx;
          }
        }
      }
      .btn-confirm {
        display: block;
        width: 100%;
        height: 78rpx;
        line-height: 78rpx;
        background: #000000;
        border-radius: 12rpx;
        text-align: center;
        font-size: 30rpx;
        color: #fff;
      }
    }
  }
</style>
