<template>
  <div class="address-add" :class="{isIphoneHair}">
    <div class="form-group">
      <div class="title">收货人:</div>
      <input class="form-control" v-model="dataForm.deliveryName">
    </div>
    <div class="form-group">
      <div class="title">手机号:</div>
      <input class="form-control" type="number" v-model="dataForm.deliveryPhone">
    </div>
    <div class="form-group">
      <div class="title">省/市/区:</div>
      <picker mode="multiSelector" @change="bindRegionChange" :value="regionIndex"
              @columnchange="bindRegionColumnChange" :range="regionList"
              range-key="name">
        <div class="form-control">{{detailName}}</div>
      </picker>
      <img class="icon-right" src="/static/images/common/right-gray.png">
    </div>
    <div class="form-group">
      <div class="title">详细地址:</div>
      <input class="form-control" v-model="dataForm.address">
    </div>
    <div class="btn-bottom-fixed" :class="{isIphoneHair}" @click="save">保存</div>
  </div>
</template>

<script>
  import REGION_LIST from 'config/region'
  import wx from 'utils/wx'
  import VUEX from "@/store/mutation-types.js"
  import Axios from "@/config/axios.js"
  export default {
    data() {
      return {
        isIphoneHair: App.isIphoneHair,
        dataForm: {
          address: '',
          deliveryName: '',
          deliveryPhone: '',
        },
        regionIndex: [],
        regionList: [],
        detailName: '',
      }
    },
    components: {},
    methods: {
      bindRegionChange() {
        const province = _.get(this.regionList, [0, this.regionIndex[0], 'name']);
        const city = _.get(this.regionList, [1, this.regionIndex[1], 'name']);
        const area = _.get(this.regionList, [2, this.regionIndex[2], 'name']);
        this.detailName = province + city + area;
      },
      bindRegionColumnChange(e) {
        const {column, value} = e.mp.detail;
        if (column === 0) {
          this.regionIndex = [value, 0, 0];
          const cityList = [];
          REGION_LIST[value].children.forEach(city => {
            cityList.push({
              name: city.name,
              code: city.code,
            })
          })
          this.regionList.splice(1, 1, cityList);
          const areaList = [];
          REGION_LIST[this.regionIndex[0]].children[this.regionIndex[1]].children.forEach(area => {
            areaList.push({
              name: area.name,
              code: area.code,
            })
          })
          this.regionList.splice(2, 1, areaList);
        } else if (column === 1) {
          this.regionIndex[1] = value;
          this.regionIndex[2] = 0;
          const areaList = [];
          REGION_LIST[this.regionIndex[0]].children[this.regionIndex[1]].children.forEach(area => {
            areaList.push({
              name: area.name,
              code: area.code,
            })
          })
          this.regionList.splice(2, 1, areaList);
        } else {
          this.regionIndex[2] = value;
        }
      },
      async save() {
        if (!this.dataForm.deliveryName || !this.dataForm.deliveryName.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '')) {
          wx.showToast('请输入收货人姓名');
          return false;
        }
        if (this.dataForm.deliveryName.length > 12) {
          wx.showToast('收货人姓名过长')
          return false;
        }
        if (!this.dataForm.deliveryPhone) {
          wx.showToast('请输入收货人手机号码');
          return false;
        }
        if (!/^[0-9]?\d{11}$/.test(this.dataForm.deliveryPhone)) {
          wx.showToast('请输入正确的手机号')
          return false
        }
        if (!this.regionIndex.length) {
          wx.showToast('请选择省市区');
          return false;
        }
        this.dataForm.province = _.get(this.regionList, [0, this.regionIndex[0], 'code']);
        this.dataForm.city = _.get(this.regionList, [1, this.regionIndex[1], 'code']);
        this.dataForm.area = _.get(this.regionList, [2, this.regionIndex[2], 'code']);
        if (!this.dataForm.address) {
          wx.showToast('请输入详细地址');
          return false;
        }
        if (this.dataForm.address.length > 64) {
          wx.showToast('详细地址过长')
          return false;
        }
        console.info(this.dataForm)
        wx.showLoading('正在提交...');
        const result = await Axios.post(this.dataForm.id ? '/address/update' : '/address/add',
          this.dataForm,{
            headers: {
              'content-type': 'application/json;charset=utf-8',
            }
          }
        )
        wx.hideLoading();
        if (result.code == 200) {
          wx.showToast(result.msg || '保存成功');
          this.type == 1 && Store.commit(VUEX.CHECKOUT.SET_ADDRESS, result.data.id)
          wx.navigateBack({delta: this.type == 3 ? 2 : 1})
        } else {
          wx.showToast(result.msg || '保存失败');
        }
      }
    },
    async mounted() {
      if(!Store.getters.isLogin){
        await Store.dispatch('login')
      }
      wx.hideLoading();
      console.info(REGION_LIST)
      this.dataForm = {};
      this.type = this.$root.$mp.query.type;
      this.regionList = [];
      this.detailName = '';
      this.regionIndex = [0, 0, 0];
      const provinceList = [];
      REGION_LIST.forEach(province => {
        provinceList.push({
          name: province.name,
          code: province.code,
        })
      })
      this.regionList.push(provinceList);
      if (this.$root.$mp.query.address) {
        wx.setNavigationBarTitle({
          title: '编辑收货地址'
        })
        this.dataForm = JSON.parse(this.$root.$mp.query.address);
        this.regionIndex[0] = _.findIndex(this.regionList[0], ['code', `${this.dataForm.province}`]);
        const cityList = [];
        REGION_LIST[this.regionIndex[0]].children.forEach(city => {
          cityList.push({
            name: city.name,
            code: city.code,
          })
        })
        this.regionList.push(cityList);
        this.regionIndex[1] = _.findIndex(this.regionList[1], ['code', `${this.dataForm.city}`]);
        const areaList = [];
        REGION_LIST[this.regionIndex[0]].children[this.regionIndex[1]].children.forEach(area => {
          areaList.push({
            name: area.name,
            code: area.code,
          })
        })
        this.regionList.push(areaList);
        this.regionIndex[2] = _.findIndex(this.regionList[2], ['code', `${this.dataForm.area}`]);
        this.detailName = this.dataForm.provinceName + this.dataForm.cityName + this.dataForm.areaName;
      } else {
        const cityList = [];
        REGION_LIST[this.regionIndex[0]].children.forEach(city => {
          cityList.push({
            name: city.name,
            code: city.code,
          })
        })
        this.regionList.push(cityList);
        const areaList = [];
        REGION_LIST[this.regionIndex[0]].children[this.regionIndex[1]].children.forEach(area => {
          areaList.push({
            name: area.name,
            code: area.code,
          })
        })
        this.regionList.push(areaList);
      }
      console.info(this.regionList)
    },
  }
</script>

<style lang="scss">
  @import "~@/styles/base";

  .address-add {
    padding-left: rpx(30);
    padding-bottom: rpx(30);
    border-top: rpx(1) solid $border;
    &.isIphoneHair {
      padding-bottom: rpx(80);
    }
    .form-group {
      position: relative;
      padding-left: rpx(200);
      border-bottom: rpx(1) solid $border;

      .form-control {
        height: rpx(90);
        line-height: rpx(90);
        font-size: rpx(28);
      }

      .icon-right {
        @include middle-center-y();
        right: rpx(30);
        width: rpx(36);
        height: rpx(36);
      }

      .title {
        @include middle-center-y();
        left: 0;
        width: rpx(160);
        font-size: rpx(28);
        text-align: left;
      }
    }

  }
</style>
