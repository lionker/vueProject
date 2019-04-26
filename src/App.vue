<template>
  <div id="app">
    <!-- 显示当前路由组件 -->
    <router-view/>

    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";

import { reqInfo } from "./api";
export default {
  async mounted() {
    // 异步获取当前地址信息
    this.$store.dispatch("getAddress"); ///必须在main.js注册,才能用store
    // 异步获取用户信息
    this.$store.dispatch("getUser");

    const result = await reqInfo()
    console.log('result', result)
  },
  components: {
    FooterGuide
  }
};
</script>
<style land="stylus" rel="stylesheelt/stylus" scoped>
</style>
