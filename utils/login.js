'use strict';
import ENV from "@/config/env";
class Login {
  constructor() {
    this.userInfo = null
  }

  async getAuth() {
    //wx.showLoading({ title: '加载中', mask: true });
    const { code } = await  wx.login();
    //1、res.code登录
    const user = await wx.request({
      url: `${ENV.CMS}/wxapp/jscode2session`,
      data: { code }
    })
    //wx.hideLoading()
    if (user.errcode) {
      return { code: 500, data: user };
    }
    return { code: 200, data: user };
  }

  async wxappDecryptData(userInfo, session_key) {
    //3、拿服务器解密
    return await wx.request({
      url: `${ENV.CMS}/wxapp/wxappDecryptData`,
      data: Object.assign(userInfo, { session_key }),
      method: 'POST',
      header: {
        'content-type': 'application/json'
      }
    })
  }
}

export default new Login()
