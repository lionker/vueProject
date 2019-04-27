<template>
  <div id="app">
    <!-- 显示当前路由组件 -->
    <router-view/>

    <FooterGuide v-show="$route.meta.isShow"/>
    <!-- 1. 在route中配置了meta属性值true;
    2. 若没有在配置项中写入meta属性值,则默认为空字符 --> 
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";

export default {
  async mounted() {
    // 异步获取当前地址信息
    this.$store.dispatch("getAddress"); ///必须在main.js注册,才能用store
    // 异步获取用户信息
    this.$store.dispatch("getUser");

  },
  components: {
    FooterGuide
  }
};
</script>
<style land="stylus" rel="stylesheelt/stylus" scoped>
</style>
