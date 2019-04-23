<template>
  <div id="app">
    <!-- 显示当前路由组件 -->
    <router-view/>

    <FooterGuide/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";

export default {
  components: {
    FooterGuide
  }
};
</script>
<style land="stylus" rel="stylesheelt/stylus" scoped>
</style>
