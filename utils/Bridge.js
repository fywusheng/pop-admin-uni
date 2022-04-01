  import ENV from "@/config/env";
function callApp(method, params) {
  if (ENV.IS_IOS) {
    window.webkit.messageHandlers[method].postMessage(params)
  } else {
    window.native[method](params)
  }
}

const Bridge = {
  //跳转url
  goURL(url) {
    wx.navigateTo({
      url: '/pages/webview/main?link=' + encodeURIComponent(link)
    })
  },
  goTopic(id) {
    wx.navigateTo({
      url: '/pages/topic/main?id=' + id
    })
  },
  goItem(id) {
    wx.navigateTo({
      url: '/pages/item/main?id=' + id
    })
  },
  goCouponCenter(id) {
    wx.navigateTo({
      url: '/pages/coupon-center/main'
    })
  },
  goCategory(id) {
    wx.navigateTo({
      url: '/pages/item-list/main?dispId=' + id
    })
  },
  goBrand(id) {
    wx.navigateTo({
      url: '/pages/brand/main?id='+id
    })
  },
  goGroup(id) {
    wx.navigateTo({
      url: '/pages/item-list/main?planId='+id
    })
  },
  goCart() {
    wx.switchTab({
      url: '/pages/cart/main'
    })
  },
  goUserCenter() {
    wx.switchTab({
      url: '/pages/me/main'
    })
  },
  goHome() {
    wx.switchTab({
      url: '/pages/index/main'
    })
  },
  goLogin() {
    wx.navigateTo({
      url: '/pages/login/main'
    })
  }
}
export default Bridge;
