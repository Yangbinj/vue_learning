// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import less from 'less'
import store from './store'
import axios from 'axios'

Vue.use(less);
Vue.prototype.$axios = axios
// this.$axios({
//   url: "",
//   method: "get",
//   params: {}
// }).then(res => {
//   console.log(res)
// })
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
