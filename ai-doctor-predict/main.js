import App from './App'
// #ifndef VUE3
import Vue from 'vue'
// vuex导入

import {createSSRApp} from 'vue'
import './uni.promisify.adaptor'
// 全局变量
import health from './static/data/health.js'
Vue.prototype.$health = health

Vue.prototype.$store   = store

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	store,
  ...App,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif