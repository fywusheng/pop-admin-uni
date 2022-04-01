<template>
  <div class="page-item" :class="{isIphoneHair}" v-if="!loading">
    <div class="empty-wrap" v-if="product.saleState !== 5">
      <img class="tip" src="/static/images/item-detail/tip.png">
      <div class="title">很抱歉，您查看的商品已无效！</div>
      <div class="desc">您可以选择浏览其他商品</div>
      <button type="button" class="btn-view" @click="toHome">看看其他商品</button>
    </div>
    <template v-else>
      <swiper class="banner-list" :circular="true" :indicator-dots="true"
              indicator-active-color="#111111" :autoplay="true" :duration="1000">
        <swiper-item v-for="(productImg,index) in productImgList" :key="index">
          <div class="banner" :style="{backgroundImage: 'url('+productImg+')'}" @click="previewImg(index)"></div>
        </swiper-item>
      </swiper>
      <div class="product-info">
        <div class="product-name">
          {{product.productName}}
        </div>
        <div class="store-wrap" @click="changeFavor">
          <img v-if="product.isCollected == 1" class="collected" src="/static/images/item-detail/store_h.png">
          <img v-else class="collected" src="/static/images/item-detail/store_n.png">
        </div>
        <div class="product-desc" v-if="product.subName">{{product.subName}}</div>
        <div class="product-price">
          <div class="sell-price">
            <div class="unit">¥</div>
            <span>{{selectSize.sellingPrice}}</span>
          </div>
          <div class="market-price" v-if="markOffPrice">
            ¥{{selectSize.markOffPrice}}
          </div>
        </div>
      </div>
      <div class="line"></div>
      <ul class="info-list">
        <li class="info border-b" v-if="couponList && couponList.length" @click="showModal('couponList')">
          <div class="title">领券</div>
          {{couponList[0].displayName}}
          <img class="more" src="/static/images/item-detail/more.png">
        </li>
        <li class="info border-b">
          <div class="title">货号</div>
          {{product.code}}
        </li>
        <li class="info border-b">
          <div class="title">发货地</div>
          {{product.deliveryRegion}}&nbsp;&nbsp;&nbsp;&nbsp;预计
          <template v-if="product.deliveryMinDays < product.deliveryMaxDays">
            {{product.deliveryMinDays}}-{{product.deliveryMaxDays}}
          </template>
          <template v-else>{{product.deliveryMinDays}}</template>
          个工作日送达
        </li>
        <li class="info">
          <div class="title">税费</div>
          {{product.tariffType == 0 ? '商家承担':'额外税费需用户承担'}}
        </li>
      </ul>
      <div class="line"></div>
      <div class="sku-list-wrap" v-if="colorList.length">
        <div class="title">{{product.firstClassName}}</div>
        <div class="label-list">
          <div class="label" :class="selectColor.firstClassAttrId == color.firstClassAttrId ? 'active':''"
               v-for="(color,index) in colorList" :key="index" @click="changeSku('selectColor',color)">
            {{color.firstClassAttrName}}
          </div>
        </div>
        <div class="title">{{product.subClassName}}</div>
        <div class="label-list">
          <block v-for="(size,index) in sizeList" :key="index">
            <li v-if="size.availableStock == 0" class="condition disabled label">
              {{size.subClassAttrName}}
            </li>
            <div v-else class="label"
                 :class="selectSize.subClassAttrId == size.subClassAttrId ? 'active':''"
                 @click="changeSku('selectSize', size)">
              {{size.subClassAttrName}}
            </div>
          </block>
        </div>
      </div>
      <div class="line"></div>
      <ul class="info-list">
        <li class="info" @click="toAttribute">
          <div class="title">产品参数</div>
          <div class="btn-right">更多参数<img src="/static/images/common/right-gray.png"></div>
        </li>
<!--        <li class="info border-b">-->
<!--          <div class="title">评价</div>-->
<!--          <div class="btn-right">查看全部评价<img src="/static/images/common/right-gray.png"></div>-->
<!--        </li>-->
      </ul>
      <div class="line"></div>
      <div class="brand-container" v-if="product.brand">
        <div class="logo" :style="{backgroundImage: 'url('+product.brand.brandLogo+')'}"></div>
        <div class="name">{{product.brand.name}}</div>
        <!-- <div class="btn-collect" @click="changeAttention">{{isAttention ? '已收藏':'收藏'}}</div> -->
      </div>
      <div class="line"></div>
      <div class="detail-img-list">
        <div class="title">商品详情</div>
        <rich-text class="rich-text" :nodes="detailContents"></rich-text>
        <img mode="widthFix" :src="img" v-for="(img,index) in detailImageList" :key="index">
      </div>
      <div class="footer">
        <button class="btn-service" open-type="contact">
          <img class="icon-img" src="/static/images/item-detail/kefu.png">
          咨询
        </button>
        <div class="btn-cart" @click="toCart">
          <img class="icon-img" src="/static/images/item-detail/cart.png">
          购物车
          <span class="count" v-if="cartCount > 0">{{cartCount}}</span>
        </div>
        <div class="btn-add-cart" @click="addCart">加入购物车</div>
        <div class="btn-buy" @click="checkout">立即购买</div>
      </div>
    </template>
    <select-sku ref="selectSku"
                :selectSize="selectSize"
                :product="product"
                :selectColor="selectColor"
                :productImgList="productImgList"
                :colorList="colorList"
                :sizeList="sizeList"></select-sku>
    <coupon-list ref="couponList" @loadCoupon="loadCoupon" :couponList="couponList"></coupon-list>
    <top ref="toTop" :bottom="isIphoneHair ? 224 : 160"></top>
  </div>
</template>

<script>
  import Top from '../../components/top'
  import SelectSku from './components/select-sku'
  import CouponList from './components/coupon-list'
  import wx from 'utils/wx'
  import XIU from "@/utils/index.js"; 
  import Axios from "@/config/axios.js"
  export default {
    data() {
      return {
        isIphoneHair: App.isIphoneHair,
        productId: '',
        product: {},
        productImgList: [],
        skuImg: {},
        colorList: [],
        saleTypeList: [{name: '预售', id: 1}, {name: '现货', id: 2}],
        sizeList: [],
        selectSaleType: {},
        selectColor: {},
        selectSize: {},
        detailContents:'',
        detailImageList: [],
        attributeList: [],
        couponList: [],
        isAttention: false,
        cartCount: 0,
        loading: true
      }
    },
    components: {
      Top,
      SelectSku,
      CouponList,
    },
    watch: {
      selectColor() {
        this.productImgList = [];
        this.sizeList = this.selectColor.skuAndPriceList;
        this.sizeList.some(size => {
          //if (size.availableStock > 0) {
            this.selectSize = size;
            return true;
          //}
        })
        this.$nextTick(() => {
          const list = [XIU.getImgFormat(this.product.mainImgUrl,  '/resize,w_750')];
          (this.selectColor.imgUrlList || []).forEach(img => {
            list.push(XIU.getImgFormat(img,  '/resize,w_750'))
          })
          this.productImgList = list;
        })
      }
    },
    methods: {
      toAttribute() {
        wx.setStorageSync('attribute', this.attributeList)
        wx.navigateTo({
          url: '/pages/item-attribute/main'
        })
      },
      toComment() {
        wx.navigateTo({
          url: '/pages/item-reviews/main?id=' + this.productId
        })
      },
      previewImg(index) {
        wx.previewImage({
          urls: this.productImgList,
          current: this.productImgList[index]
        })
      },
      toHome() {
        wx.switchTab({
          url: '/pages/index/main'
        })
      },
      async updateCart() {
        const result = await Axios.get('/cart/getNum')
        if (result.code == 200) {
          this.cartCount = result.data.cartNum;
          result.data > 0 ? wx.setTabBarBadge({
            index: 2,
            text: `${result.data.cartNum}`
          }) : wx.removeTabBarBadge({
            index: 2,
          })
        }
      },
      async loadCoupon() {
        const couponResult = await Axios.get('/coupon/getByProduct', {
          params: {
            id: this.productId,
          }
        });
        if (couponResult.code == 200) {
          this.couponList = couponResult.data;
        }
      },
      async changeAttention() {
        if(!Store.getters.isLogin){
          wx.navigate({
            url: '/pages/login/main'
          })
          return false;
        }
        wx.showLoading('正在提交...');
        const result = await Axios.get(!this.isAttention ? 'brand/addconcern' : 'brand/delconcern', {
          params: {
            id: this.product.brand.id,
          }
        })
        wx.hideLoading();
        if (result.code == 200) {
          this.isAttention = !this.isAttention;
          wx.showToast(this.isAttention ? '收藏成功' : '取消成功');
        } else {
          wx.showToast(result.msg || '操作失败');
        }
      },
      toCart() {
        wx.switchTab({
          url: '/pages/cart/main'
        })
      },
      async changeFavor() {
        if(!Store.getters.isLogin){
          wx.navigate({
            url: '/pages/login/main'
          })
          return false;
        }
        wx.showLoading('正在提交...');
        const result = await Axios.post(this.product.isCollected == 1 ? '/product/deleteFavorites' : '/product/addFavorites', {
            id: this.productId,
        })
        wx.hideLoading();
        if (result.code == 200) {
          this.product.isCollected = this.product.isCollected == 1 ? 0 : 1;
          wx.showToast(result.msg);
        } else {
          wx.showToast(result.msg || '操作失败');
        }
      },
      showModal(name) {
        this.$refs[name].show(true, 1);
      },
      changeSku(type, value) {
        this[type] = value;
      },
      addCart() {
        if(!Store.getters.isLogin){
          wx.navigateTo({
            url: '/pages/login/main'
          })
          return false;
        }
        this.$refs.selectSku.show(true, 1);
      },
      checkout() {
        if(!Store.getters.isLogin){
          wx.navigateTo({
            url: '/pages/login/main'
          })
          return false;
        }
        this.$refs.selectSku.show(true, 2);
      },
      async loadData() {
        wx.showLoading();
        this.loading = true;
        const result = await Axios.get('/product/get', {
          params: {
            id: this.productId,
          },
        });
        wx.hideLoading();
        this.loading = false;
        if (result.code == 200) {
          wx.setNavigationBarTitle({
            title: result.data.name
          })
          if(result.data.productDetail){
            const imgReg = /<img.*?(?:>|\/>)/gi;//匹配src属性
            const srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
            const detailImageList = [];
            (result.data.productDetail.match(imgReg) || []).map((imageTag) => {
              const img = imageTag.match(srcReg)[1];
              if(/^http/.test(img)){
                //获取图片地址
                detailImageList.push(XIU.getImgFormat(imageTag.match(srcReg)[1],  '/resize,w_750'))
              }
            })
            this.detailImageList = detailImageList;
            if(this.detailImageList.length==0){
              this.detailContents = result.data.productDetail
            }
          }
          result.data.firstClassName = result.data.firstClassName || '颜色';
          result.data.subClassName = result.data.subClassName || '尺码';
          this.product = result.data;
          this.isAttention = this.product.brand.isConcerned == 1;
          this.title = this.product.name;
          this.colorList = [];
          this.product.skuList && this.product.skuList.forEach(skuPriceAndStock => {
            this.colorList.push(skuPriceAndStock);
          })
          this.selectSaleType = this.saleTypeList[0];
          if (this.colorList.length) {
            this.selectColor = this.colorList[0];
            this.sizeList = this.colorList[0].skuAndPriceList;
            const list = [this.product.mainImgUrl];
            this.productImgList = list.concat(this.colorList[0].imgUrlList || []);
          }
          this.sizeList.some(size => {
            if (size.availableStock) {
              this.selectSize = size;
              return true;
            }
          })
          this.attributeList = []
          this.product.attributes && this.product.attributes.forEach(attribute => {
            this.attributeList.push({
              name: attribute.attrName,
              value: attribute.attrValContent
            })
          })
        } else {
          wx.showToast(result.msg || '获取商品信息失败')
        }
        this.updateCart();
        this.loadCoupon();
      }
    },
    onUnload() {
      this.$refs.selectSku.show(false);
      this.product = {};
      this.productImgList = [];
      this.detailImageList = [];
      this.colorList = [];
    },
    onShareAppMessage() {
      console.info( 'pages/item/main?id='+this.productId)
      return {
        path: 'pages/item/main?id='+this.productId,
        title: this.product.productName,
        imageUrl: this.product.mainImgUrl
      }
    },
    onPageScroll(e) {
      this.$refs.toTop.show(e.scrollTop > App.systemInfo.screenHeight)
    },
    async onShow() {
      console.info('query:', this.$root.$mp.query)
      if(!Store.getters.isLogin){
       await Store.dispatch('login')
      }
      this.productId = this.$root.$mp.query.id;
      this.loadData();
      App.updateCartNum();
    },
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .page-item {
    padding-bottom: rpx(150);
    background: #fff;
    &.isIphoneHair {
      padding-bottom: rpx(214);
      .footer {
        padding-bottom: rpx(64);
      }
    }
    .banner-list {
      position: relative;
      height: rpx(750);
      background: #fff;

      .banner {
        width: rpx(750);
        height: rpx(750);
        @include background-image();
      }
    }

    .product-info {
      position: relative;
      padding-left: rpx(30);
      padding-right: rpx(30);
      background-color: #fff;
      text-align: left;

      .product-name {
        padding-right: rpx(50);
        padding-top: rpx(38);
        color: $black;
        font-size: rpx(30);
        @include multi-ellipsis();
        line-height: rpx(56);
      }

      .store-wrap {
        position: absolute;
        right: rpx(8);
        top: rpx(10);
        width: rpx(100);
        height: rpx(100);
        z-index: 100;

        .collected {
          @include middle-center();
          width: rpx(38);
          height: rpx(38);
        }
      }

      .product-desc {
        padding-top: rpx(25);
        color: $extra-light-black;
        font-size: rpx(28);
      }

      .product-price {
        position: relative;
        display: flex;
        /*padding-top: rpx(20);*/
        padding-bottom: rpx(20);
        align-items: center;

        .sell-price {
          position: relative;
          display: flex;
          align-items: center;
          padding-left: rpx(20);
          /*font-weight: 500;*/

          .unit {
            position: absolute;
            left: 0;
            bottom: rpx(10);
            margin-right: rpx(5);
            font-size: rpx(26);
          }

          span {
            font-size: rpx(54);
            font-weight: 500;
          }
        }

        .market-price {
          margin-left: rpx(20);
          color: $light-black;
          font-size: rpx(28);
          text-decoration: line-through;
        }
      }
    }

    .info-list {
      padding-left: rpx(30);
      padding-right: rpx(30);
      background-color: #fff;
      .info {
        position: relative;
        padding-left: rpx(128);
        padding-right: 0;
        height: rpx(90);
        line-height: rpx(90);
        font-size: rpx(26);
        color: $light-black;
        @include ellipsis();
        border-bottom: rpx(1) solid $border;
        .title {
          @include middle-center-y();
          left: 0;
          color: $black;
          /*font-weight: 500;*/
        }
        .btn-right {
          display: flex;
          align-items: center;
          float: right;
          color: $light-black;
          img {
            margin-left: rpx(10);
            width: rpx(36);
            height: rpx(36);
          }
        }
        .more {
          @include middle-center-y();
          right: 0;
          width: rpx(42);
          height: rpx(12);
        }
      }
    }

    .sku-list-wrap {
      padding: rpx(45) rpx(30) rpx(1);
      background-color: #fff;

      .title {
        font-size: rpx(30);
      }

      .label-list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: rpx(45);

        .label {
          position: relative;
          margin-top: rpx(30);
          margin-right: rpx(25);
          padding-left: rpx(5);
          padding-right: rpx(5);
          min-width: rpx(110);
          max-width: rpx(210);
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

    .comment-container {
      position: relative;
      padding-left: rpx(28);
      height: rpx(100);
      line-height: rpx(100);
      font-size: rpx(30);
      background-color: #fff;
      border-bottom: rpx(1) solid $border;
      .btn-right {
        display: flex;
        align-items: center;
        @include middle-center-y();
        right: rpx(30);
        color: #888888;
        font-size: rpx(26);

        img {
          margin-left: rpx(10);
          width: rpx(26);
          height: rpx(26);
        }
      }
    }

    .brand-container {
      position: relative;
      background-color: #fff;
      min-height: rpx(140);
      padding: rpx(40) rpx(140) rpx(30) rpx(154);

      .logo {
        @include middle-center-y();
        left: rpx(30);
        @include background-image();
        width: rpx(100);
        height: rpx(100);
        background-size: contain;
      }

      .name {
        @include middle-center-y();
        font-size: rpx(30);
      }

      .number {
        padding-top: rpx(20);
        font-size: rpx(22);
        color: #888;
      }

      .btn-collect {
        @include middle-center-y();
        right: rpx(30);
        border: 1px solid #050505;
        padding: rpx(6) rpx(30);
        text-align: center;
        font-size: rpx(24);
        color: $extra-light-black;
      }
    }

    .detail-img-list {
      margin-top: rpx(20);
      background-color: #fff;

      .title {
        display: block;
        padding: rpx(32) rpx(24) rpx(48);
        font-size: rpx(30);
        color: $black;
        font-weight: bold;
      }
      img {
        display: block;
        width: 100%;
      }
      .rich-text {
        line-height: 1.5;
        padding: rpx(30);
        font-size: rpx(26);

        .img {
          display: block;
          width: 100%;
        }
      }
    }

    .footer {
      display: flex;
      align-items: center;
      @include middle-center-x(fixed);
      bottom: 0;
      width: rpx(750);
      background-color: #fff;
      box-shadow: 0px -1px 0px 0px rgba(238, 237, 237, 1);

      .btn-block-buy {
        display: block;
        width: 100%;
        @include btn();
      }

      .btn-service, .btn-cart {
        position: relative;
        font-size: rpx(20);
        color: $black;
        text-align: center;
        width: rpx(120);
        height: rpx(88);
        line-height: rpx(30);
        .icon-img {
          display: block;
          margin: rpx(10) auto rpx(5);
          width: rpx(40);
          height: rpx(40);
        }
      }

      .btn-cart {
        padding-right: rpx(30);
        width: rpx(130);
        position: relative;

        i {
          position: relative;

          &:after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: rpx(10);
            height: rpx(10);
            border-radius: 50%;
          }
        }

        .count {
          position: absolute;
          right: rpx(20);
          top: rpx(5);
          background-color: $red;
          height: rpx(40);
          width: rpx(40);
          text-align: center;
          line-height: rpx(40);
          color: #fff;
          border-radius: 50%;
          @include ellipsis();
        }
      }

      .btn-add-cart, .btn-buy {
        width: rpx(250);
        border-radius: 0;
      }

      .btn-add-cart {
        @include btn();
        background-color: $main-color;
      }

      .btn-buy {
        @include btn();
      }
    }

    .empty-wrap {
      padding-left: rpx(100);
      padding-right: rpx(100);
      text-align: center;

      .tip {
        display: block;
        margin: rpx(152) auto rpx(53);
        width: rpx(245);
        height: rpx(245);
      }

      .title {
        font-size: rpx(36);
        line-height: rpx(50);
        color: $extra-black;
      }

      .desc {
        padding-top: rpx(16);
        font-size: rpx(30);
        line-height: rpx(40);
      }

      .btn-view {
        margin-top: rpx(215);
        @include btn-block();
      }
    }
  }
</style>
