<script>
  import UUID from 'uuid-js'
  import wx from "utils/wx";
import Axios from "@/config/axios.js"
  export default {
    async onLaunch() {
      console.log('app created')
      wx.init();
      const deviceInfo = wx.getSystemInfoSync();
      App.systemInfo = deviceInfo;
      const isIphoneX = /iPhone X/i.test(deviceInfo.model);
      // iPhone X or iPhone XS
      const isIphoneXS = deviceInfo.platform === "ios" && deviceInfo.pixelRatio === 3 && deviceInfo.screenWidth === 375 && deviceInfo.screenHeight === 812;
      // iPhone XS Max
      const isIphoneXSMAX = deviceInfo.platform === "ios" && deviceInfo.pixelRatio === 3 && deviceInfo.screenWidth === 414 && deviceInfo.screenHeight === 896;
      // iPhone XR
      const isIphoneXR = deviceInfo.platform === "ios" && deviceInfo.pixelRatio === 2 && deviceInfo.screenWidth === 414 && deviceInfo.screenHeight === 896;
      App.isIphoneHair = isIphoneX || isIphoneXS || isIphoneXSMAX || isIphoneXR;
      if (!wx.getStorageSync('deviceNumber')) {
        wx.setStorageSync('deviceNumber', UUID.create(4).toString())
      }
      App.updateCartNum = async function () {
        try {
          const result = await Axios.get('/cart/getNum')
          if (result.code == 200 && result.data.cartNum > 0) {
            wx.setTabBarBadge({
              index: 2,
              text: `${result.data.cartNum}`
            })
          } else {
            wx.removeTabBarBadge({
              index: 2,
            })
          }
        }catch (error){}
      }
    }
  }
</script>

<style lang="scss">
  @import "./styles/base";
</style>
