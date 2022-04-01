<template>
  <div class="page-index">
    <div class="search-layout">
      <div class="search" @click="toSearch">
        <img class="icon-search" src="/static/images/index/search.png">
        输入关键字搜索商品...
      </div>
    </div>
    <top ref="toTop" :bottom="80" :showContact="false"></top>
    <layout :layOutId="layOutId" ref="layout" @change="change"></layout>
  </div>
</template>

<script>
  import Layout from '../../components/layout'
  import Top from '../../components/top'
  import wx from 'utils/wx'
  import Axios from '@/config/axios.js'
  import XIU from "@/utils/index.js"
  import Store from "@/store/index.js"

  export default {
    data() {
      return {
        showTip: true,
		layOutId: 'app_home'
      }
    },
    components: {
      Layout,
      Top,
    },
    onShareAppMessage() {
      return {
        title: ''
      }
    },
    async onPullDownRefresh() {
      await this.$refs.layout.refresh();
      setTimeout(function () {
        wx.stopPullDownRefresh()
      }, 3000)
    },
    methods: {
      change() {
        wx.stopPullDownRefresh();
      },
      async toSearch() {
        wx.navigateTo({
          url: '/pages/search/main'
        })
      },
      async getUserInfo(userInfo) {
        Store.dispatch('login', userInfo)
      }
    },
    onPageScroll(e) {
      XIU.Bus.$emit('pageScroll');
      this.$refs.toTop.show(e.scrollTop > App.systemInfo.screenHeight)
    },
    onShow() {
      App.updateCartNum();
    },
    async onLoad() {
      if(!Store.getters.isLogin){
        await Store.dispatch('login')
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/styles/base";


  .search-layout {
    display: flex;
    align-items: center;
    padding-left: rpx(32);
    padding-right: rpx(32);
    padding-bottom: rpx(10);
    .search {
      display: flex;
      align-items: center;
      width: 100%;
      height: rpx(64);
      line-height: rpx(64);
      font-size: rpx(28);
      padding-left: rpx(20);
      color: $extra-black;
      background-color: #f8f8f8;
      border-radius: rpx(10);

      .icon-search {
        margin-right: rpx(15);
        height: rpx(28);
        width: rpx(28);
      }
    }
  }
</style>
