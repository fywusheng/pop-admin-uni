import './utils/ald-stat/ald-stat'
import Vue from 'vue'
import App from './App'
import Store from '@/store'
import '@/config/axios'
import "@/utils/wx"
import ENV from "@/config/env"

global.Store = Store
global.State = Store.state
const app = new Vue(App)
app.$mount()


// 因为mpvue不支持ref, 所以自行模拟一个_ref临时来用, 仅支持组件, 不支持原生的dom
Vue.mixin({
  props: {
    _ref: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      ENV,
    }
  },
  methods: {
    _refs(_ref) {
      return _.find(this.$children, {_ref})
    }
  },
  mounted() {
    if (this.$mp && this.$mp.mpType === 'page') {
      let {loadDefaultData, data} = this.$options
      if (loadDefaultData && data) {
        if (typeof data === 'function') {
          Object.assign(this, data.call(this))
        } else {
          console.warn('data is not function')
        }
      }
    }
  },
})

if (Vue.config) {
  // 还是不能捕获 异步钩子的错误..
  Vue.config.errorHandler = function (...args) {
    console.error(...args)
  }
}
