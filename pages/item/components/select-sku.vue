<style lang="scss">
  @import "~@/styles/base";

  .modal-wrap {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .3);
    z-index: 10000;
  }

  .select-sku {
    @include middle-center-x();
    bottom: 0;
    width: 100%;
    background: #fff;
    scroll-view {
      height: rpx(928);
    }
    &.isIphoneHair {
      padding-bottom: rpx(64);
    }
    .btn-close {
      position: absolute;
      right: rpx(30);
      top: rpx(30);
      width: rpx(30);
      height: rpx(30);
      z-index: 100;
    }
    .sku-header {
      position: relative;
      height: rpx(258);

      .sku-img {
        position: absolute;
        left: rpx(30);
        top: rpx(40);
        width: rpx(178);
        height: rpx(178);
        @include background-image();
        background-size: cover;
      }

      .sell-price {
        padding-top: rpx(100);
        padding-left: rpx(232);
        color: $black;
        font-size: rpx(30);
      }

      .product-no {
        padding-top: rpx(30);
        font-size: rpx(28);
        padding-left: rpx(232);
        color: #4A4A4A;
      }
    }

    .sku-hd {
      padding: rpx(30) rpx(30) rpx(50);

      .info {
        padding-bottom: rpx(30);

        .title {
          padding-top: rpx(30);
          padding-bottom: rpx(20);
          font-size: rpx(30);
          color: $black;
        }

        .label-list {
          display: flex;
          flex-wrap: wrap;

          .label {
            position: relative;
            margin-top: rpx(30);
            margin-right: rpx(25);
            padding-left: rpx(5);
            padding-right: rpx(5);
            width: rpx(110);
            height: rpx(64);
            line-height: rpx(64);
            text-align: center;
            font-size: rpx(24);
            @include ellipsis();
            color: $light-black;
            border: rpx(2) solid #CDCDCD;

            &.active {
              color: $black;
              border-color: $black;

              &:after {
                content: '';
                position: absolute;
                right: -6px;
                bottom: -6px;
                width: 12px;
                height: 12px;
                background: #111;
                transform: rotate(-45deg);
              }
            }

            &.disabled {
              border: 1px dotted #CDCDCD;
              color: #AAAAAA;
              cursor: not-allowed;
            }
          }
        }
      }

      .number-wrap {
        position: relative;
        padding-top: rpx(40);
        padding-bottom: rpx(40);
        font-size: rpx(30);
        color: $black;

        .c-number-wrap {
          @include middle-center-y();
          top: 30px;
          right: rpx(30);
        }
      }
    }

    .btn-submit {
      width: rpx(750);
      @include btn();
    }

  }
</style>

<template>
  <div v-if="showPopup" class="modal-wrap">
    <div class="select-sku" :class="{isIphoneHair}">
      <img @click="show(false)" class="btn-close" src="../../../../static/images/item-detail/close.png">
      <scroll-view scroll-y>
        <div class="sku-header">
          <div class="sku-img" :style="{backgroundImage: 'url('+imgUrl+')'}"></div>
          <div class="sell-price">
            <template v-if="selectSize.subClassAttrId">
              <span>¥{{selectSize.sellingPrice}}</span>
            </template>
          </div>
          <div class="product-no">{{selectSize.subClassAttrName}}</div>
        </div>
        <div class="line"></div>
        <div class="sku-hd">
          <div class="info" v-if="colorList.length">
            <div class="title">{{product.firstClassName}}</div>
            <div class="label-list">
              <div class="label" :class="selectColor.firstClassAttrId == color.firstClassAttrId ? 'active':''"
                   v-for="(color,index) in colorList" :key="index" @click="changeColor(color)">
                {{color.firstClassAttrName}}
              </div>
            </div>
          </div>
          <div class="info" v-if="sizeList.length">
            <div class="title">{{product.subClassName}}</div>
            <div class="label-list">
              <!-- <div class="label round" :class="selectSize.subClassAttrId == size.subClassAttrId ? 'active':''"
                   v-for="(size,index) in sizeList" :key="index" @click="changeSize(size)">
                {{size.subClassAttrName}}
              </div> -->
              <block v-for="(size,index) in sizeList" :key="index">
                <li v-if="size.availableStock == 0" class="condition disabled label">
                  {{size.subClassAttrName}}
                </li>
                <div v-else class="label round" :class="selectSize.subClassAttrId == size.subClassAttrId ? 'active':''" @click="changeSize(size)">
                  {{size.subClassAttrName}}
                </div>
              </block>
            </div>
          </div>
          <div class="number-wrap">
            数量
            <number :min="1" :max="selectSize.availableStock" @change="changeNum"></number>
          </div>
        </div>
      </scroll-view>
      <div class="btn-submit" @click="submit">确定</div>
    </div>
  </div>
</template>

<script>
  import Number from 'components/number'
  import wx from 'utils/wx'
  import Axios from "@/config/axios.js"

  export default {
    name: 'SELECT_SKU',
    props: {
      product: {
        type: Object,
        default: {},
      },
      productImgList: {
        type: Array,
        default: [],
      },
      colorList: {
        type: Array,
        default: [],
      },
      sizeList: {
        type: Array,
        default: [],
      },
      selectColor: {
        type: Object,
        default: {},
      },
      selectSize: {
        type: Object,
        default: {},
      }
    },
    data() {
      return {
        isIphoneHair: App.isIphoneHair,
        operateType: 1,
        showPopup: false,
        number: 1,
        imgUrl: '',
      }
    },
    watch: {
      selectColor() {
        if (this.selectColor.imgUrlList && this.selectColor.imgUrlList.length) {
          this.imgUrl = this.selectColor.imgUrlList[0]
        } else {
          this.imgUrl = this.product.mainImgUrl;
        }
      }
    },
    components: {
      Number
    },
    methods: {
      changeNum(number) {
        console.log('sku id: ' + this.selectSize.id)
        this.number = number;
      },
      submit() {
        switch (this.operateType) {
          case 1:
            this.addCart();
            break;
          case 2:
            this.checkout()
            break;
        }
      },
      async addCart() {
        if (!this.selectSize.availableStock) {
          wx.showToast('库存不足')
          return false;
        }
        wx.showLoading('正在添加...');
        const result = await Axios.post('/cart/add', {
          num: this.number,
          skuId: this.selectSize.id,
        })
        wx.hideLoading();
        if (result.code == 200) {
          App.updateCartNum();
          wx.showToast('添加成功')
          this.show(false);
          this.$parent.updateCart()
          this.show(false);
        } else {
          wx.showToast(result.msg || '添加失败')
        }
      },
      checkout() {
        if (!this.selectSize.availableStock || this.selectSize.availableStock < this.number) {
          wx.showToast('库存不足')
          return false;
        }
        this.show(false);
        wx.navigateTo({
          url: `/pages/checkout/main?type=2&num=${this.number}&skuId=${this.selectSize.id}`
        })
      },
      changeColor(color) {
        this.$parent.changeSku('selectColor', color)
      },
      changeSize(size) {
        this.$parent.changeSku('selectSize', size)
      },
      show(flag, type) {
        this.showPopup = flag;
        if (flag) {
          this.operateType = type;
          if (this.selectColor.imgUrlList && this.selectColor.imgUrlList.length) {
            this.imgUrl = this.selectColor.imgUrlList[0]
          } else {
            this.imgUrl = this.product.mainImgUrl;
          }
        }
      }
    },
    async mounted() {
    }
  }
</script>
