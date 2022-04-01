<template>
  <div class="address-add">
    <div class="form-group">
      <img class="icon" src="/static/images/mobile-bind/user.png">
      <input class="form-control" placeholder-style="placeholder" type="number" v-model="dataForm.mobile"
             placeholder="请输入手机号">
    </div>
    <div class="form-group verify-wrap">
      <img class="icon" src="/static/images/mobile-bind/password.png">
      <input class="form-control" type="number" placeholder-style="placeholder" v-model="dataForm.code"
             placeholder="请输入短信验证码">
      <div class="btn-send" @click="sendCode">{{verifyTxt}}</div>
    </div>
    <!--<div class="form-group">-->
    <!--<img class="icon" src="/static/images/mobile-bind/password.png">-->
    <!--<input class="form-control" placeholder-style="placeholder" v-model="dataForm.password"-->
    <!--placeholder="请输入登录密码">-->
    <!--</div>-->
    <div class="protocol-wrap">
      <img @click="changeAgree" v-if="isAgree" class="protocol-icon" src="/static/images/mobile-bind/check.png">
      <img @click="changeAgree" v-else class="protocol-icon" src="/static/images/common/no-select.png">
      <div class="protocol">我同意《PLAY LOUNGE会员协议》</div>
    </div>
    <div class="btn-save" @click="save">绑定</div>
  </div>
</template>

<script>
  import md5 from 'md5'

  export default {
    data() {
      return {
        dataForm: {},
        isAgree: true,
        totalTime: 60,
        verifyTxt: '发送验证码',
        sendCoding: false,
        canSendCode: true,
      }
    },
    components: {},
    methods: {
      changeAgree() {
        this.isAgree != this.isAgree;
      },
      async sendCode() {
        if (!this.canSendCode) {
          return false;
        }
        if (!this.dataForm.mobile) {
          wx.showToast({
            title: '请输入手机号',
            icon: 'none'
          });
          return false;
        }
        wx.showLoading({ title: '正在加载...', mask: true });
        const result = await wx.request({
          data: {
            ac: this.dataForm.mobile,
            type: 5,
            pwd: '123456',
            method: 'user.getcode'
          }
        })
        wx.hideLoading()
        if (result.result.result == 1) {
          this.canSendCode = false;
          wx.showToast({
            title: '短信已发送,请注意查收',
            icon: 'none'
          });
          this.timeInterval = setInterval(function () {
            if (this.totalTime === 0) {
              clearInterval(this.timeInterval);
              this.totalTime = 60;
              this.canSendCode = true;
              this.verifyTxt = '获取验证码';
              return;
            }
            this.verifyTxt = '重发(' + this.totalTime + 's)';
            this.totalTime--;
          }.bind(this), 1000)
        } else {
          wx.showToast({
            title: result.result.message || '发送失败',
            icon: 'none'
          });
        }
      },
      async save() {
        console.info(this.dataForm)
        if (!this.dataForm.mobile) {
          wx.showToast({
            title: '请输入手机号',
            icon: 'none'
          });
          return false;
        }
        if (!this.dataForm.code) {
          wx.showToast({
            title: '请输入短信验证码',
            icon: 'none'
          });
          return false;
        }
        //if (!this.dataForm.password) {
        //  wx.showToast({
        //    title: '请输入登录密码',
        //    icon: 'none'
        //  });
        //  return false;
        //}
        if (!this.isAgree) {
          wx.showToast({
            title: '请同意《PLAY LOUNGE会员协议》',
            icon: 'none'
          });
          return false;
        }
        const checkResult = await wx.request({
          data: {
            method: 'usercode.check',
            type: 5,
            mb: this.dataForm.mobile,
            code: this.dataForm.code,
          }
        })
        if (checkResult.result.result != 1) {
          wx.showToast({
            title: '验证码不对',
            icon: 'none'
          });
          return false;
        }
        console.info(this.dataForm)
        wx.showLoading({ title: '正在提交...', mask: true });
        const result = await wx.request({
          method: 'POST',
          data: {
            method: 'accountXCXBangding',
            type: 3,
            mb: this.dataForm.mobile,
            code: this.dataForm.code,
            uuid: App.openid,
            //pwd: md5(this.dataForm.password)
          }
        })
        wx.hideLoading();
        if (result.result.result == 1) {
          App.sessionId = result.data.sessionId;
          wx.showModal({
            content: '绑定成功',
            showCancel: false,
            success: result => {
              if(result.confirm){
                if (getCurrentPages().length === 1) {
                  wx.switchTab({
                    url: '/pages/me/main'
                  })
                } else {
                  wx.navigateBack();
                }
              }
            }
          });
        } else {
          wx.showToast({
            title: result.result.message || '保存失败',
            icon: 'none'
          });
        }
      }
    },
    async mounted() {
      wx.setNavigationBarTitle({
        title: '绑定手机号'
      })
      if (!App.sessionId) {
        await App.fetchLogin();
      }
      const userInfo = await wx.request({
        data: {
          method: 'user.get',
        }
      })
      if(userInfo.result.result == 1 && userInfo.data.phone){
        if (getCurrentPages().length === 1) {
          wx.switchTab({
            url: '/pages/me/main'
          })
        } else {
          wx.navigateBack();
        }
      }
    },
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .address-add {
    .form-group {
      position: relative;
      margin-top: rpx(60);
      padding-left: rpx(100);
      .icon {
        @include middle-center-y();
        left: rpx(30);
        width: rpx(40);
        height: rpx(44);
      }
      .form-control {
        padding: 0 rpx(20);
        height: rpx(68);
        line-height: rpx(68);
        font-size: rpx(28);
        border-bottom: rpx(1) solid $border;
      }
    }
    .verify-wrap {
      display: flex;
      align-items: center;
      .form-control {
        width: rpx(330);
        margin-right: rpx(115);
      }
      .btn-send {
        width: rpx(180);
        height: rpx(68);
        line-height: rpx(68);
        border: rpx(1) solid $main-color;
        color: $main-color;
        font-size: rpx(28);
        text-align: center;
      }
    }
    .protocol-wrap {
      display: flex;
      align-items: center;
      padding-left: rpx(30);
      margin-top: rpx(60);
      .protocol-icon {
        margin-right: rpx(10);
        width: rpx(29);
        height: rpx(29);
      }
      .protocol {
        font-size: rpx(24);
        color: $extra-black;
      }
    }
    .placeholder {
      color: $extra-black;
    }
    .btn-save {
      display: block;
      margin: rpx(150) auto;
      width: rpx(600);
      height: rpx(80);
      line-height: rpx(80);
      text-align: center;
      background-color: $main-color;
      color: #fff;
      font-size: rpx(32);
      border-radius: rpx(8);
    }
  }
</style>
