import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import ajax from '@/untils/axios.js'
Vue.prototype.$axios=ajax

import config from "@/untils/config.js"
Vue.prototype.$url=config.url
// console.log("url"+config.url)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import '@/styles/resetm.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
