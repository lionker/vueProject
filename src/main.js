import Vue from 'vue'
// 引入
import { Button } from 'mint-ui'
import VueLazyload from 'vue-lazyload'

import App from './App'
import router from './router'
import store from './store/index'
import Header from './components/Header/Header'
import Star from './components/Star/Star'
import CartControl from './components/CartControl/CartControl'

import './mock/mockServer'
import loading from './common/imgs/loading.gif'
import './filters' // 加载过滤器
// 注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component('Star', Star)
Vue.component('CartControl', CartControl)
Vue.component(Button.name, Button)

Vue.use(VueLazyload, { // 内部会定义一个指令: lazy
  loading,
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  /*components: {
   App,
 },
 template: '<App/>',*/
  render: h => h(App),   // 这个等于上面注释的两步, 实现原理为下面注释 
  /*render: function (createElement) { // 将render返回的标签渲染到页面上去
   return createElement(App)  // '<App/>'
 },*/
  store
})
