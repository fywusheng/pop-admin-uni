<template>
  <div class="filter-list-layout" v-show="showFlag" @touchstart="touchstart">
    <div class="filter-list-body">
      <div class="title">筛选</div>
      <scroll-view :scroll-y="true" :style="{height: height+'rpx'}">
        <div class="filter">
          <div class="filter-title">
            价格区间
            <div class="more" @click="showMore(prices)" v-show="prices.dataList.length > maxCount">
              {{prices.showMore ? '收起':'更多'}}
            </div>
          </div>
          <ul class="condition-list">
            <li class="condition" v-show="index < maxCount || prices.showMore" :class="selectPrice.id==price.id ? 'active':''"
                @click="changePrice(price)" :key="index"
                v-for="(price,index) in prices.dataList">{{price.name}}
            </li>
          </ul>
        </div>
        <div class="filter">
          <div class="filter-title">
            分类
            <div class="more" @click="showMore(categorys)" v-show="categorys.dataList.length > maxCount">
              更多
            </div>
          </div>
          <ul class="condition-list">
            <li class="condition" v-show="index < maxCount || categorys.showMore"
                :class="selectCategory.id == category.id ? 'active':''"
                @click="changeCategory(category)"
                :key="category.id" v-for="(category,index) in categorys.dataList">
              <!--<div class="img">{{brand.name}}</div>-->
              {{category.name}}
            </li>
          </ul>
        </div>
        <div class="filter" v-for="(attr,index) in attrs" :key="index">
          <div class="filter-title">
            {{attr.name}}
            <div class="more" @click="showMore(attr)" v-show="attr.dataList.length > maxCount">
              更多
            </div>
          </div>
          <ul class="condition-list">
            <li class="condition" :class="subAttr.isSelected ? 'active':''"
                @click="changeAttr(attr.dataList, subAttr, subIndex)" :key="subAttr.id"
                v-for="(subAttr,subIndex) in attr.dataList">{{subAttr.name}}
            </li>
          </ul>
        </div>
      </scroll-view>
      <div class="footer">
        <div class="btn-reset" @click="reset">重置</div>
        <div class="btn-confirm" @click="confirm">确认</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      prices: {
        type: Object,
        default: {
          showMore: false,
          dataList: [],
        }
      },
      categorys: {
        type: Object,
        default: {
          showMore: false,
          dataList: [],
        }
      },
      attrs: {
        type: Array,
        default: [],
      },
    },
    data() {
      return {
        showFlag: false,
        maxCount: 6,
        height: App.systemInfo.windowHeight*App.systemInfo.pixelRatio - 190,
        selectPrice: {},
        selectCategory: {},
        attrcodes: '',
      }
    },
    watch: {},
    components: {},
    methods: {
      showMore(conditionList) {
        conditionList.showMore = !conditionList.showMore;
      },
      changePrice(price) {
        this.selectPrice = price;
      },
      changeCategory(category) {
        this.selectCategory = category;
      },
      changeAttr(conditionList, condition, index) {
        condition.isSelected = !condition.isSelected;
        conditionList.splice(index, 1, condition);
        const attrList = [];
        this.attrs.forEach(attr => {
          attr.dataList.forEach(condition => {
            if (condition.isSelected) {
              attrList.push(condition.value)
            }
          })
        })
        this.attrcodes = attrList.join('***');
      },
      show(flag, type) {
        this.showFlag = flag;
        if (type) {
          this.type = type;
        }
      },
      reset(){
        this.selectPrice = {};
        this.selectCategory = {};
        this.attrcodes = '';
        this.attrs.forEach(attr => {
          attr.dataList.forEach(condition => {
            condition.isSelected = false;
          })
        })
      },
      async confirm() {
        this.show(false);
        const params = {};
        if(this.selectPrice.name){
          params.priceRange = this.selectPrice.name;
        }
        if(this.selectCategory.id){
          params.dispId = this.selectCategory.id;
        }
        if(this.attrcodes){
          params.attrcodes = this.attrcodes;
        }
        this.$emit('change', params)
      },
    },
    mounted() {},
  }
</script>

<style lang="scss">
  @import "../~@/styles/base";

  .filter-list-layout {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 1000;
    .filter-list-body {
      position: absolute;
      bottom: 0;
      top: 0;
      right: 0;
      width: rpx(600);
      padding-bottom: rpx(150);
      background-color: #fff;
      .title {
        padding: rpx(30);
        font-size: rpx(30);
        font-weight: bold;
        text-align: center;
        border-bottom: rpx(1) solid $border;
      }
      .filter {
        position: relative;
        .filter-title {
          position: relative;
          padding: rpx(30);
          font-size: rpx(26);
          .more {
            @include middle-center-y();
            right: rpx(30);
            font-size: rpx(20);
            color: $gray;
          }
        }
        .condition-list {
          display: flex;
          flex-wrap: wrap;
          padding-left: rpx(30);
          padding-right: rpx(30);
          border-bottom: rpx(1) solid $border;
          .condition {
            margin-bottom: rpx(30);
            width: rpx(240);
            height: rpx(60);
            line-height: rpx(60);
            text-align: center;
            cursor: pointer;
            font-size: rpx(26);
            background-color: $light-black;
            color: $gray;
            border: rpx(1) solid transparent;
            &:nth-child(2n+1){
              margin-right: rpx(50);
            }
            &.active {
              color: $main-color;
              border-color: $main-color;
              background-color: transparent;
            }
          }
        }
      }
      .footer {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        .btn-confirm, .btn-reset {
          flex: 1;
          height: rpx(100);
          line-height: rpx(100);
          background-color: $main-color;
          font-size: rpx(32);
          color: #fff;
          text-align: center;
        }
        .btn-reset {
          background-color: #ff859c;
        }
      }
    }
  }

</style>
