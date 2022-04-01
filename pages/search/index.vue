<style lang="scss">
  @import "~@/styles/base";

  .page-search {
    position: relative;
    display: block;
    width: rpx(750);
    background-color: #fff;

    .search-header {
      @include middle-center-x(fixed);
      top: 0;
      width: rpx(750);
      height: rpx(88);
      padding-left: rpx(32);
      padding-right: rpx(118);
      display: flex;
      align-items: center;
      background-color: #fff;
      z-index: 100;

      form {
        display: block;
        width: 100%;
      }

      input {
        display: block;
        position: relative;
        width: 100%;
        padding-left: rpx(65);
        padding-right: rpx(30);
        height: rpx(64);
        background-color: $extra-gray;
        font-size: rpx(28);
        color: $black;
      }

      .icon-search {
        @include middle-center-y();
        left: rpx(54);
        width: rpx(30);
        height: rpx(30);
        z-index: 10;
      }

      .btn-clear {
        @include middle-center-y();
        right: rpx(30);
        font-size: rpx(28);
        font-weight: 500;
      }
    }

    .label-list-wrap {
      padding: rpx(128) rpx(30) rpx(30);
      background-color: #fff;

      .title {
        position: relative;
        font-size: rpx(30);
        color: $black;
        font-weight: bold;

        img {
          @include middle-center-y();
          right: rpx(30);
          width: rpx(30);
          height: rpx(30);
        }
      }

      .label-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        .label {
          position: relative;
          margin-top: rpx(40);
          margin-right: rpx(30);
          height: rpx(68);
          line-height: rpx(68);
          width: rpx(110);
          font-size: rpx(30);
          text-align: center;
          background-color: #F6F6F6;
          color: $black;
          @include ellipsis();
        }
      }
    }
  }
</style>

<template>
  <div class="page-search">
    <div class="search-header">
      <img class="icon-search" src="/static/images/common/icon-search.png">
      <input ref="searchInput" confirm-type="search" :adjust-position='false' @confirm="search('')" :placeholder="key" v-model="key"
             placeholder="搜索你想找的商品">
      <div class="btn-clear" @click="cancel">取消</div>
    </div>
    <div class="label-list-wrap" v-if="showHistory">
      <div class="title">
        历史搜索
        <img src="/static/images/icon-delete.png" @click="clearHistory">
      </div>
      <ul class="label-list">
        <li class="label" @click="search(history)" v-for="(history,index) in historyList" :key="index">
          {{history}}
        </li>
      </ul>
    </div>
    <!--<ul class="label-list mt-20">-->
    <!--<li class="title label">热门标签</li>-->
    <!--<li class="label" @click="search(hot)" v-for="(hot,index) in hotList" :key="index">{{hot}}</li>-->
    <!--</ul>-->
  </div>
</template>

<script>
  export default {
    name: 'SEARCH',
    data() {
      return {
        key: '',
        historyList: wx.getStorageSync('SEARCH_HISTORY_LIST') || [],
        resultList: [],
      }
    },
    loadDefaultData: true,
    computed: {
      showHistory() {
        return this.historyList && this.historyList.length;
      },
    },
    components: {},
    filters: {},
    methods: {
      cancel() {
        wx.navigateBack()
      },
      clearHistory() {
        wx.removeStorageSync('SEARCH_HISTORY_LIST');
        this.historyList = [];
      },
      async search(hot) {
        if (hot) {
          this.key = hot;
        }
        this.key && this.historyList.indexOf(this.key) === -1 && this.historyList.push(this.key)
        wx.setStorageSync('SEARCH_HISTORY_LIST', this.historyList)
        wx.navigateTo({
          url: '/pages/item-list/main?key='+this.key
        })
      },
    },
    async onShow() {
      this.key = '';
    }
  }
</script>
