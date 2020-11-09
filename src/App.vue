<template>
  <div id="app" class="app-container">
    <!-- 顶部Header区域-->
    <mt-header fixed title="一起学习呀"></mt-header>

    <!-- 中间路由router-view区域 -->

    <!-- 底部Tabbar区域 -->
   <tabBar></tabBar>
  </div>
</template>


<script>
import  tabBar  from "./components/tabBar";
export default {
  name: "App",
  components: {
    tabBar
  },
};
</script>

<style lang="less" scoped>
.app-container {
  padding-top: 40px;
}
</style>
