/**
 * 登录模块
 */
import wx from "utils/wx";
import _ from '@/utils/lodash';
import VUEX from "@/store/mutation-types.js";
import Axios from "@/config/axios.js"

const initState = {
  type: 1,
  addressId: null,
  invoice: null,
  couponId: null,
  coupon: null,
  remarkList: [],
  couponData: null,
  settlement: null,
  num: 0,
  skuId: null,
  useBalanceState:false
}

function invoiceType(type) {
  switch (type) {
    case 0:
      return '电子普通发票'
    case 1:
      return '增值专用发票'
  }
}

function invoiceTitle(type) {
  switch (type) {
    case 0:
      return '个人'
    case 1:
      return '单位'
  }
}

function invoiceContent(type) {
  switch (type) {
    case 1:
      return '服装、鞋帽'
    case 2:
      return '箱包'
    case 3:
      return '礼品、办公用品'
    case 4:
      return '订单商品明细'
  }
}

export default {
  state: _.cloneDeep(initState),
  getters: {},
  mutations: {
    [VUEX.CHECKOUT.SET_SETTLEMENT](state, settlement) {
      state.settlement = settlement;
    },
    [VUEX.CHECKOUT.SET_DIRECT_DATA](state, {num, skuId}) {
      state.num = num;
      state.skuId = skuId;
    },
    [VUEX.CHECKOUT.SET_ADDRESS](state, addressId) {
      if (addressId != state.addressId) {
        state.addressId = addressId;
        Store.dispatch('getCheckoutData');
      }
    },
    [VUEX.CHECKOUT.SET_TYPE](state, type) {
      state.type = type;
    },
    [VUEX.CHECKOUT.SET_INVOICE](state, invoice) {
      invoice.showContent = invoiceTitle(invoice.applicantType) + '-' + invoiceContent(invoice.invoiceContent);
      state.invoice = invoice;
    },
    [VUEX.CHECKOUT.SET_COUPON](state, coupon) {
      if (!state.coupon || coupon.id != state.coupon.id) {
        state.coupon = coupon;
        state.couponId = coupon.id;
        Store.dispatch('getCheckoutData');
      }
    },
    [VUEX.CHECKOUT.SET_COUPON_DATA](state, couponData) {
      state.couponData = couponData;
    },
    [VUEX.CHECKOUT.SET_REMARK](state, remarkList) {
      state.remarkList = remarkList;
    },
    [VUEX.CHECKOUT.CHANGE_REMARK](state, {index, remark}) {
      state.remarkList[index].remark = remark;
    },
    [VUEX.CHECKOUT.SET_BALANCE](state, useBalanceState) {
      state.useBalanceState = useBalanceState;
      Store.dispatch('getCheckoutData');
    },
    [VUEX.CHECKOUT.RESET_STATE](state) {
      state = _.cloneDeep(initState);
    },
  },
  actions: {
    async toPay({state}) {
      if (!state.addressId) {
        wx.showToast('请选择收货地址...');
        return false;
      }
      const params = {
        appId: 0,
        isUseBalanceState: state.useBalanceState,
        addressId: state.addressId
      }
      console.info(params)
      if (state.coupon && state.coupon.id) {
        params.couponId = state.couponId;
      }
      const storeItem = [];
      state.settlement.settleStoreList.forEach((store, index) => {
        storeItem.push({
          storeId: store.storeId,
          receiveRemark: state.remarkList[index].remark,
          couponId: store.couponId || 'null'
        })
      })
      params.storeItem = storeItem;
      //params.usePoint = this.usePoint;
      if (state.invoice ) {
        params.invoice = state.invoice;
      }
      if (state.type === 2) {
        params.num = state.num;
        params.skuId = state.skuId;
      }
      wx.showLoading('订单正在提交...')
      const result = await Axios.post(state.type === 1 ? '/order/create' : '/order/create.direct', params);
      if (result.code == 200) {
        const payResult = await Axios.post('/payment/sign', {
          orderId: result.data,
          paymentMethodCode: 'wechatxcx',
          code: State.login.openid
        })
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
        }else if(result.data.returncode == -99900){
          wx.redirectTo({
            url: `/sub-pages/me/order-list/main?status=0`
          })
        } else {
          wx.showToast({
            title: payResult.msg || '获取失败',
            icon: 'none'
          });
        }
      } else {
        wx.hideLoading()
        wx.showToast(result.msg || '创建订单失败');
      }
    },
    async getGlobalCoupon({state, commit}) {
      const couponSettlementItemList = [];
      state.settlement.settleStoreList.forEach(store => {

        store.settlementItems.forEach(cart => {
          const item = {}
          item.productId = cart.productId
          item.skuId = cart.skuId
          item.quantity = cart.quantity
          couponSettlementItemList.push(item);
        })
      })
      const params = {settlementItems:couponSettlementItemList};
      const couponResult = await Axios.post('/coupon/settlement/list', params)
      if (couponResult.code == 200 && couponResult.data) {
        commit(VUEX.CHECKOUT.SET_COUPON_DATA, couponResult.data)
      }
    },
    async getCheckoutData({state, dispatch, commit}) {
      const params = {};
      if (state.addressId) {
        params.addressId = state.addressId;
      }
      //console.info('useBalanceState:', state.useBalanceState)
      if (state.couponId) {
        params.couponId = state.couponId;
      }
      if (state.type === 2) {
        params.num = state.num;
        params.skuId = state.skuId;
      }
      params.useBalanceState = state.useBalanceState
      wx.showLoading();
      const result = await Axios.post(state.type === 1 ? '/order/settlement' : '/order/settlement.direct', params)
      wx.hideLoading();
      if (result.code == 200) {
        const remarkList = [];
        result.data.settleStoreList && result.data.settleStoreList.forEach(store => {
          remarkList.push({
            storeId: store.storeId,
            remark: '',
          })
        })
        commit(VUEX.CHECKOUT.SET_REMARK, remarkList)
        //commit(VUEX.CHECKOUT.SET_ADDRESS, result.data.addressId)
        state.addressId = result.data.addressId;
        commit(VUEX.CHECKOUT.SET_SETTLEMENT, result.data)
      } else {
        wx.showToast(result.result.message);
      }
      dispatch('getGlobalCoupon')
    },
  }
};
