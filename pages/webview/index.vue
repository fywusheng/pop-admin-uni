<template>
  <div class="page-webview">
    <web-view class="webview" :src="link"></web-view>
    <top ref="toTop"></top>
  </div>
</template>

<script>
  import Top from '../../components/top'
  import timeFormat from '../../utils/time-format'

  export default {
    data() {
      return {
        link: '',
      }
    },
    components: {
      Top,
    },
    methods: {

    },
    onPageScroll(e) {
      this.$refs.toTop.show(e.scrollTop > App.systemInfo.screenHeight)
    },
    async mounted() {
      this.link = decodeURIComponent(this.$root.$mp.query.link);
      wx.setNavigationBarTitle({
        title: this.$root.$mp.query.title || ''
      })
    },
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .page-webview {
    .webview {
      width: 100%;
      height: 100vh;
    }
  }
</style>
