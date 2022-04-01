/**
 * 登录模块
 */
import wx from "utils/wx";
import VUEX from '@/store/mutation-types.js'
import Axios from '@/config/axios.js'

export default {
  state: {
    sessionId: "",
    session_key: '',
    openid: '',
    unionid: ''
  },
  getters: {
    isLogin(state) {
      return !!state.sessionId;
    }
  },
  mutations: {
    [VUEX.LOGIN.SET_WX_AUTH_ID](state, payload) {
      payload = payload || {}
      if (payload.openId) {
        state.openid = payload.openId
        wx.setStorageSync('openid', state.openId)
      }

      if (payload.unionId) {
        state.unionid = payload.unionId
        wx.setStorageSync('unionid', state.unionId)
      }

      if (payload.wxSessionKey) {
        state.session_key = payload.wxSessionKey
        wx.setStorageSync('session_key', state.wxSessionKey)
      }
      if(payload.sessionId){
        state.sessionId = payload.sessionId
        wx.setStorageSync('sessionId', state.sessionId)
      }
    },
    [VUEX.LOGIN.SET_SESSION_ID](state, payload) {
      state.sessionId = payload;
    },
  },
  actions: {
    async login(ctx) {
      const {code} = await wx.login();
      const authData = await Axios.get(`/user/wxcode.login`, {
        params: {
          jscode: code
        }
      })
      ctx.commit(VUEX.LOGIN.SET_WX_AUTH_ID, authData.data)
      App.updateCartNum();
    },
  }
};
