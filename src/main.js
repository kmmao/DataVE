import Vue from 'vue'
import App from './App.vue'

import 'font-awesome/css/font-awesome.css'

//引入 iview
import iView from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(iView);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

//引入axios
// import apiConfig from '../config/api.config.js'
import axios from 'axios'
import qs from 'qs'
// axios.defaults.baseURL = apiConfig.baseUrl
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.$qs = qs           //全局注册，使用方法为:this.$qs

//实例化 store
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
