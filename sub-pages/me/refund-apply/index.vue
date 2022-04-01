<template>
  <div class="page-service-type">
    <ul class="info-list" v-if="dataForm.returnsItem">
      <li class="item">
        <img class="item-logo" mode="aspectFit" :lazy-load="true" :src="dataForm.returnsItem.imgUrl">
        <div class="title">{{dataForm.returnsItem.productName}}</div>
        <div class="desc">{{dataForm.returnsItem.skuName}}</div>
        <div class="price">¥{{dataForm.returnsItem.sellingPrice}}</div>
      </li>
      <li class="info">
        <div class="title">售后类型：</div>
        <div class="desc">{{returnsTypeLabel}}</div>
      </li>
      <li class="info" v-if="returnsType == 2">
        <div class="title">货物状态：</div>
        <picker @change="changeType" :range="goodsStates" range-key="name">
          <div class="desc">
            {{goodsStateName|| '请选择货物状态...'}}
            <!-- <img class="icon-right" v-if="operateType == 2" src="/static/images/common/icon-right.png"> -->
          </div>
        </picker>
      </li>
      <li class="info">
        <div class="title">售后原因：</div>
        <picker @change="changeReason" mode="selector"  :range="reasonTypeList" range-key="name">
          <div class="desc">
            {{ reasonTypeName || '请选择售后原因...'}}
            <!-- <img class="icon-right" v-if="operateType == 2" src="/static/images/common/icon-right.png"> -->
          </div>
        </picker>
      </li>
      <li class="info">
        <div class="title">退货数量：</div>
        <div class="money">{{dataForm.num}}</div>
      </li>
      <li class="info" v-if="returnsType != 3">
        <div class="title">退款金额：</div>
        <div class="money">¥{{dataForm.price}}</div>
      </li>
      <li class="info">
        <div class="title">申请说明：</div>
        <input class="remark" v-model="dataForm.remark" placeholder="选填"/>
      </li>
      <li class="info">
      <div class="title">退货凭证：</div>
      <div class="upload-wrap">
        <div class="img-wrap" v-for="(preview,index) in previewList" :key="index">
          <img class="img" mode="aspectFit" :src="preview">
          <img class="btn-delete" @click="remove(index)" src="/static/images/common/icon-delete.png">
        </div>
        <img class="btn-upload" @click="chooseImage" src="/static/images/common/upload.png">
      </div>
      </li>
    </ul>
    <div class="btn-submit" @click="save">提交申请</div>
  </div>
</template>

<script>
	import Axios from "@/config/axios.js"
  export default {
    data() {
      return {
        returnsItem:'',
        returnsType: 1,
        returnsTypeLabel:'',
        reasonTypeName: '',
        reasonTypeList: [],
        goodsStateName: '',
        goodsStates: [
          {
            id: 1,
            name: '未收到货'
          }, {
            id: 2,
            name: '已收到货'
          }
        ],
        price: 0,
        returnTransferPrice: 0,
        dataForm: {
          remark: '',
          goodsState: 2,
        },
        imgList: [],
        previewList: []
      }
    },
    components: {},
    methods: {
      async save() {
        if (!this.dataForm.goodsState) {
          wx.showToast({
            title: '请选择货物状态！',
            icon: 'none'
          })
          return false;
        }
        if (!this.dataForm.reasonType) {
          wx.showToast({
            title: '请选择退货原因',
            icon: 'none'
          })
          return false;
        }
        this.imgList.forEach((img, index) => {
          this.dataForm[ `img${index + 1}` ] = img;
        })
        wx.showLoading({ title: '正在提交数据...', mask: true });
        const result = await Axios.post('/aftersale/returns/submit',this.dataForm)
        wx.hideLoading()
        if (result.code == 200) {
          wx.showModal({
            title: '提交成功',
            content: '等待系统审核',
            showCancel: false,
            success: () => {
              //wx.navigateBack();
              wx.navigateTo({url: '../refund-detail/main?returnId=' + result.data.id})
            }
          })
        } else {
          wx.showToast({
            title: result.msg,
            icon: 'none'
          })
        }
      },
      changeType(e) {
        const index = e.mp.detail.value;
        this.goodsStateName = this.goodsStates[ index ].name;
        this.dataForm.goodsState = this.goodsStates[ index ].id;
      },
      changeReason(e) {
        const index = e.mp.detail.value;
        this.reasonTypeName = this.reasonTypeList[ index ].name;
        this.dataForm.reasonType = this.reasonTypeList[ index ].id;
      },
      remove(index) {
        this.imgList.splice(index, 1);
        this.previewList.splice(index, 1);
      },
      async chooseImage() {
        if (this.imgList.length == 3) {
          wx.showToast({
            title: '最多只能上传3张图片',
            icon: 'none'
          })
          return false;
        }
        const result = await wx.chooseImage({
          count: 3,
        })
        if (result.tempFilePaths.length) {
          while (result.tempFilePaths.length){
            const authResult = await Axios.get('/oss/aliyun/product', {
              params: {
                dirPrefix: 'item',
                objectName: Date.now()
              }
            })
            if(authResult.code == 200){
              wx.uploadFile({
                url: `https://szyh-ecommerce-oss.oss-cn-zhangjiakou.aliyuncs.com`,
                filePath: result.tempFilePaths.pop(),
                name: 'file',
                formData: {
                  key: authResult.data.filename,
                  policy: authResult.data.policy,
                  OSSAccessKeyId: authResult.data.accessId,
                  signature: authResult.data.signature,
                  success_action_status: '200',
                  callback: authResult.data.callback,
                },
                success: res => {
                  const uploadResult = JSON.parse(res.data)
                  if (uploadResult.code == 200) {
                    this.previewList.push(uploadResult.data.url)
                    this.imgList.push(uploadResult.data.url)
                  }
                }
              })
            }
          }
          console.info(this.previewList)
        }
      }
    },
    // onUnload() {
    //   this.dataForm = {
    //     remark: '',
    //     goodsType: 2,
    //   }
    //   this.imgList = [];
    //   this.previewList = [];
    // },
    async mounted() {
      if(!Store.getters.isLogin){
        await Store.dispatch('login')
      }
      this.dataForm.orderItemId = this.$mp.query.itemId;
      this.dataForm.num = this.$mp.query.num;
      this.dataForm.returnsType = this.$mp.query.type;
      this.returnsType = parseInt(this.$mp.query.type);
      this.dataForm.orderId = this.$mp.query.orderId;
      this.status = this.$mp.query.status;
      let title = '售后申请';
      switch (this.returnsType) {
      case 1:
        this.returnsTypeLabel = '仅退款';
        break;
      case 2:
        this.returnsTypeLabel = '退货退款';
        break;
      case 3:
        this.returnsTypeLabel = '换货';
        break;
      }
      wx.setNavigationBarTitle({
        title: title
      })
      const result = await Axios.get('/aftersale/returns/apply', {
        params: {
          orderItemId: this.dataForm.orderItemId,
          orderId: this.dataForm.orderId,
          num: this.dataForm.num,
          returnsType: this.dataForm.returnsType,
        },
      })
      wx.hideLoading()
      if (result.code == 200) {
        Object.keys(result.data.reasonType).forEach(key => {
          this.reasonTypeList.push({
            id: key,
            name: result.data.reasonType[ key ],
          })
        })
        this.dataForm.orderItemId = result.data.orderItemId;
        this.dataForm.orderId = result.data.orderId;
        this.dataForm.price = result.data.price;
        this.dataForm.transferPrice = result.data.returnTransferPrice;
        this.dataForm.returnsItem = result.data.skuItem
        this.goodsStateName = ''
        this.reasonTypeName = ''
      } else {
        wx.showToast({
          title: result.result.message,
          icon: 'none'
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .page-service-type {
    .info-list {
      border-top: rpx(1) solid $border;
      .item {
        position: relative;
        border-bottom: rpx(1) solid $border;
        height: rpx(180);
        padding-left: rpx(220);
        padding-top: rpx(30);

        .item-logo {
          position: absolute;
          left: rpx(35);
          top: 50%;
          width: rpx(120);
          height: rpx(120);
          transform: translateY(-50%);
        }
        .title {
          line-height: rpx(40);
          font-size: rpx(30);
        }
        .desc {
          margin-top: rpx(10);
          font-size: rpx(24);
          color: $light-black;
        }
        .price {
          margin-top: rpx(10);
          font-size: rpx(24);
          color: $black;
        }
      }
      .info {
        display: flex;
        align-items: center;
        position: relative;
        border-bottom: rpx(1) solid $border;
        .title {
          padding-left: rpx(30);
          height: rpx(100);
          line-height: rpx(100);
          font-size: rpx(28);
          width: rpx(180);
        }
        .money {
          margin-left: rpx(40);
          color: $main-color;
          font-size: rpx(28);
        }
        .desc {
          display: flex;
          align-items: center;
          @include middle-center-y();
          width: rpx(500);
          right: rpx(30);
          font-size: rpx(26);
          color: $light-black;
          .icon-right {
            @include middle-center-y();
            right: 0;
            width: rpx(16);
            height: rpx(27);
          }
        }
        .remark {
          width: rpx(540);
          margin-left: rpx(40);
          height: rpx(80);
          line-height: rpx(80);
          font-size: rpx(28);
        }
      }
    }
   .upload-wrap {
      display: flex;
      padding-top: rpx(30);
      padding-left: rpx(10);
      padding-bottom: rpx(30);
      flex-wrap: wrap;
      .img-wrap {
        position: relative;
        width: rpx(150);
        height: rpx(150);
        margin-left: rpx(20);
        margin-bottom: 30rpx;
        .btn-delete {
          position: absolute;
          right: 0;
          top: 0;
          width: rpx(27);
          height: rpx(29);
        }

        .img {
          width: rpx(150);
          height: rpx(150);
        }
      }

      .btn-upload {
        // margin-left: rpx(20);
        width: rpx(150);
        height: rpx(150);
      }
    }
    .btn-submit {
      @include middle-center-x(fixed);
      bottom: 0;
      width: 100%;
      line-height: rpx(100);
      height: calc(env(safe-area-inset-bottom) + 100rpx);
      text-align: center;
      font-size: rpx(30);
      background-color: $main-color;
      color: #fff;
      z-index: 1000;
    }
  }
</style>
