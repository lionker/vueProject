<template>
  <div id="app">
    <!-- 显示当前路由组件 -->
    <router-view/>

    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";

import {reqAddress} from './api'
export default {
  mounted () {
    // 异步获取当前地址信息
    this.$store.dispatch('getAddress') ///必须在main.js注册,才能用store
  }, 
  components: {
    FooterGuide
  }
};
</script>
<style land="stylus" rel="stylesheelt/stylus" scoped>
</style>
