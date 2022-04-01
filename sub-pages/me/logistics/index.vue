<template>
  <div class="page-logistics-info">
    <ul class="info-list">
      <li class="info">
        快递公司: {{orderExpressModel.expressName}}
      </li>
      <li class="info">
        快递单号: {{orderExpressModel.oddNumber}}
      </li>
    </ul>
    <ul class="trace-list">
      <li class="trace" v-if="logistics.senderInfoList" :key="index" v-for="(senderInfo,index) in logistics.senderInfoList">
        <div class="line"></div>
        您的包裹正在派件,快递员({{senderInfo.personName}}),电话({{senderInfo.personTel}})
      </li>
      <li class="trace" v-if="logistics.traceList" :key="index" v-for="(trace,index) in logistics.traceList">
        <div class="line"></div>
        您的包裹到达({{trace.acceptStation}}),时间({{senderInfo.acceptTime}})
      </li>
      <li class="trace" v-if="logistics.pickerInfoList" :key="index" v-for="(pickerInfo,index) in logistics.pickerInfoList">
        <div class="line"></div>
        您的包裹正在等待收件,网点({{pickerInfo.stationName}}),收件员({{pickerInfo.personName}}),电话({{pickerInfo.personTel}})
      </li>
    </ul>
    <top ref="toTop"></top>
  </div>
</template>

<script>
  import Top from '../../../components/top'
  import timeFormat from '../../../utils/time-format'

  export default {
    data() {
      return {
        orderExpressModel: {},
        logistics: {
          pickerInfoList: [],
          senderInfoList: [],
          traceList: [],
        }
      }
    },
    components: {
      Top,
    },
    methods: {
      async loadData() {
        wx.showLoading({ title: '正在获取数据...', mask: true });
        const orderResult = await wx.request({
          data: {
            method: 'order.show',
            orderId: this.id,
          }
        })
        wx.hideLoading()
        if (orderResult.result.result != 1) {
          wx.showToast({
            title: orderResult.result.message,
            icon: 'none'
          })
          return false;
        }
        if(orderResult.data.orderExpressModels && orderResult.data.orderExpressModels.length){
          this.orderExpressModel = orderResult.data.orderExpressModels[0];
          const result = await wx.request({
            method: 'express.query',
            logisticCode: this.orderExpressModel.oddNumber,
            shipperCode: this.orderExpressModel.expressSign,
            orderId: this.id,
          });
          if (result.result.result == 1) {
            this.logistics = result.data || {};
          } else {
            wx.showToast({
              title: result.result.message,
              icon: 'none'
            })
          }
        }
      },
    },
    onUnload() {
      this.order = {};
    },
    onPageScroll(e) {
      this.$refs.toTop.show(e.scrollTop > App.systemInfo.screenHeight)
    },
    async mounted() {
      wx.setNavigationBarTitle({
        title: '查看物流'
      })
      this.id = this.$root.$mp.query.id;
      if (!App.sessionId) {
        await App.fetchLogin();
      }
      this.loadData();
    },
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .page-logistics-info {
    .info-list {
      padding-left: rpx(30);
      padding-right: rpx(30);
      border-bottom: rpx(1) solid #F2F2F2;
      .info {
        padding-top: rpx(30);
        padding-bottom: rpx(30);
        font-size: rpx(24);
        color: #333;
      }
    }
    .trace-list {
      .trace {
        position: relative;
        padding-left: rpx(30);
        padding-top: rpx(30);
        font-size: rpx(16);
        color: #333;
        &:after {
          content: '';
          left: 0;
          bottom: rpx(4);
          position: absolute;
          width: rpx(10);
          height: rpx(10);
          background-color: #a8b2ba;
          border-radius: 50%;
        }
        &:first-child {
          color: #333;
          &:after {
            background-color: #fff;
          }
          .line {
            top: rpx(38)
          }
        }
        .line {
          position: absolute;
          left: rpx(5);
          top: 0;
          bottom: 0;
          border-left: 1px solid  #f2f2f2;
        }
      }
    }
  }
</style>
