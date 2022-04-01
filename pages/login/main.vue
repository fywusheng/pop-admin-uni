<template>
  <div class="page-login">
    <img class="logo" src="/static/images/mango.jpg">
    <div class="title">微信登录后应用将获取以下权限</div>
    <div class="desc"><span></span>获取微信公开信息（头像、昵称等）</div>
    <button class="btn-submit" @getphonenumber="getPhoneNumber" open-type="getPhoneNumber">确定</button>
  </div>
</template>

<script>
import Axios from '@/config/axios.js'
export default {
  data() {
    return {
      showTip: false,
    }
  },
  methods: {
    async getPhoneNumber(e) {
      const detailInfo = e.mp.detail;
      console.info(State.login)
      wx.showLoading({
        title: '正在绑定...'
      })
      const result = await Axios.post(`/user/syncWXPhone`, {
        iv: detailInfo.iv,
        encryptedData: detailInfo.encryptedData,
        sessionKey: State.login.session_key,
        openId: State.login.openid,
      }, {
        headers: {
          'content-type': 'application/json;charset=utf-8',
        }
      })
      wx.hideLoading();
      console.info(result)
      if(result.code == 200){
        await Store.dispatch('login')
        wx.navigateBack();
      }else{
        wx.showToast({
          icon: 'none',
          title: result.msg
        })
      }
    },
  },
  async mounted() {

  }
}
</script>

<style lang="scss">
@import "~@/styles/base";

.page-login {
  background: #f5f5f5;
  height: 100vh;
  padding-top: rpx(80);

  .logo {
    display: block;
    width: rpx(230);
    height: rpx(230);
    margin: 0 auto rpx(100);
    border-radius: 50%;
  }

  .title {
    padding-left: rpx(150);
    font-size: rpx(32);
    font-weight: bold;
  }

  .desc {
    display: flex;
    align-items: center;
    padding-left: rpx(150);
    padding-top: rpx(30);
    font-size: rpx(24);
    color: #666;

    span {
      margin-right: rpx(10);
      width: rpx(8);
      height: rpx(8);
      border-radius: 50%;
      background: #666;
    }
  }

  .btn-submit {
    display: block;
    margin: rpx(100) auto 0;
    width: rpx(550);
    height: rpx(80);
    line-height: rpx(80);
    text-align: center;
    background: #1aad19;
    font-size: rpx(32);
    color: #fff;
    border-radius: rpx(40);
  }
}
</style>
