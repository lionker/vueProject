import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store/index'
import Header from './components/Header/Header'

// 注册全局组件
Vue.component('Header', Header)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App), //?
  store
})
