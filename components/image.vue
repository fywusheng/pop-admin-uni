<template>
  <div class="topic-image">
	<img class="image" :style="{height: height+ 'rpx'}" @load="load" :src="img"
         @tap="onTap"></image>
  </div>
</template>

<script>
  import XIU from '@/utils/index.js'
  export default {
    props: {
      content: {
        type: Object,
        default: {},
      }
    },
    data() {
      return {
        height: 400,
      }
    },
    computed: {
      img(){
        return this.content.image && XIU.getImgFormat(this.content.image,  '/resize,w_750')
      }
    },
    methods: {
      load(e) {
        this.height = parseInt(e.mp.detail.height / e.mp.detail.width * 750);
      },
      onTap() {
        XIU.genLink(this.content.link)
      }
    },
    async mounted() {

    }
  }
</script>

<style lang="scss">
  @import "../styles/base";

  .topic-image {
    .image {
      width: rpx(750);
    }
  }
</style>
