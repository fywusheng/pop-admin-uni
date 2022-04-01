<style lang="scss" scoped>
  @import "~@/styles/base";

  .point-info {
    width: rpx(750);
    height: rpx(250);
    text-align: center;
    .point {
      padding-top: rpx(35);
      font-size: rpx(60);
      color: $black;
      font-weight: 500;
    }
    .desc {
      font-size: rpx(28);
      color: $extra-black;
    }
  }
  .tab-list {
    display: flex;
    align-items: center;
    .tab {
      flex: 1;
      padding-top: rpx(25);
      padding-bottom: rpx(25);
      text-align: center;
      font-size: rpx(30);
      border-bottom: rpx(2) solid transparent;
      &.active {
        border-bottom-color: $black;
        font-weight: 500;
      }
    }
  }
  .content-wrap {
    margin-top: rpx(25);

    .record-list {
      padding-left: rpx(30);
      padding-right: rpx(30);

      .record {
        position: relative;
        padding-top: rpx(30);
        padding-bottom: rpx(30);

        .record__title {
          padding-right: rpx(100);
          padding-top: rpx(10);
          font-size: rpx(24);
          //font-weight: bold;
          @include ellipsis();
        }

        .record__desc {
          padding-top: rpx(20);
          font-size: rpx(22);
          color: $extra-black;
        }

        .record__money {
          @include middle-center-y();
          right: 0;
          font-size: rpx(24);
          font-weight: bold;
        }
      }
    }
  }

  .empty {
    padding-top: rpx(175);
    text-align: center;

    .title {
      font-size: rpx(28);
      font-weight: bold;
    }

    .desc {
      padding-top: rpx(50);
      font-size: rpx(28);
      color: #999;
    }
  }
</style>

<template>
  <div id="app">
    <div class="point-info">
      <div class="point">{{balance}}</div>
      <div class="desc">我的余额（元）</div>
    </div>
    <ul class="tab-list">
      <li class="tab" @click="changeStatus(0)" :class="status === 0 ? 'active':''">
        <div class="name">全部</div>
      </li>
      <li class="tab" @click="changeStatus(1)" :class="status === 1 ? 'active':''">
        <div class="name">收入</div>
      </li>
      <li class="tab" @click="changeStatus(2)" :class="status === 2 ? 'active':''">
        <div class="name">支出</div>
      </li>
    </ul>
    <div class="line"></div>
    <scroll-view scroll-y class="content-wrap">
      <template v-if="status === 0">
        <ul class="record-list border-t">
          <li class="record border-b" v-for="(data,index) in allList" :key="index">
            <div class="record__title">{{data.operationTypeDesc}}&nbsp;</div>
            <div class="record__desc">{{data.createdTime}}&nbsp;</div>
            <div class="record__money">{{data.operationType === 1 ? '+':'-'}}{{data.value}}</div>
          </li>
        </ul>
        <div v-if="!allList.length" class="empty">
          <div class="title">还没有任何记录</div>
          <div class="desc">芒果微购为你准备了精美产品，快去商店吧！</div>
        </div>
      </template>
      <template v-if="status === 1">
        <ul class="record-list border-t">
          <li class="record border-b" v-for="(data,index) in incomeList" :key="index">
            <div class="record__title">{{data.operationTypeDesc}}&nbsp;</div>
            <div class="record__desc">{{data.createdTime}}&nbsp;</div>
            <div class="record__money">+{{data.value}}</div>
          </li>
        </ul>
        <div v-if="!incomeList.length" class="empty">
          <div class="title">还没有任何记录</div>
          <div class="desc">芒果微购为你准备了精美产品，快去商店吧！</div>
        </div>
      </template>
      <template v-if="status === 2">
        <ul class="record-list border-t">
          <li class="record border-b" v-for="(data,index) in costList" :key="index">
            <div class="record__title">{{data.operationTypeDesc}}&nbsp;</div>
            <div class="record__desc">{{data.createdTime}}&nbsp;</div>
            <div class="record__money">-{{data.value}}</div>
          </li>
        </ul>
        <div v-if="!costList.length" class="empty">
          <div class="title">还没有任何记录</div>
          <div class="desc">芒果微购为你准备了精美产品，快去商店吧！</div>
        </div>
      </template>
    </scroll-view>
  </div>
  <!--<go-top bottom="60px"></go-top>-->
</template>

<script>
  import dateTime from 'filters/date-time'
import Axios from "@/config/axios.js"
  export default {
    name: 'MY-COUNT',
    data() {
      return {
        loading: true,
        userInfo: {},
        allList: [],
        status: 0,
        balance: 0,
      }
    },
    computed: {
      costList() {
        const list = [];
        this.allList.forEach(data => {
          if (data.operationType == 0) {
            list.push(data)
          }
        })
        return list;
      },
      incomeList() {
        const list = [];
        this.allList.forEach(data => {
          if (data.operationType == 1) {
            list.push(data)
          }
        })
        return list;
      }
    },
    filters: {
      dateTime,
      type(type) {
        switch (type) {
          case 1:
            return '购物送积分'
          case 4:
            return '活动送积分'
          case 8:
            return '购物抵扣积分'
        }
      }
    },
    methods: {
      changeStatus(status){
        this.status = status;
      },
      async loadData() {
        wx.showLoading();
        this.loading = true;
        const result = await Axios.post('/member/wallet/records/list', {
            sessionId: Store.state.login.sessionId,
            pageNo: 1,
            pageSize: 100
        });
        this.loading = false;
        wx.hideLoading();
        if (result.code == 200) {
          this.allList = result.data.list;
        } else {
          wx.showToast(result.result.message || '获取会员资金变更明细失败！');
        }
      }
    },
    async mounted() {
      wx.showLoading();
      const result = await Axios.get('/member/wallet/getTotalBalance');
      wx.hideLoading();
      if (result.code == 200) {
        this.balance = result.data.balance;
      }
      this.loadData()
    }
  }
</script>
