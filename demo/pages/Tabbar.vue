<template>
  <pm-layout title="Tabbar">
    <pm-tabbar v-model="index">
      <pm-tabbar-item icon="iconfont icon-home" :index="0">首页</pm-tabbar-item>
      <pm-tabbar-item icon="iconfont icon-cart" :index="1">购物车</pm-tabbar-item>
      <pm-tabbar-item icon="iconfont icon-people" :index="2">我的</pm-tabbar-item>
      <pm-tabbar-item icon="iconfont icon-settings" :index="3">设置</pm-tabbar-item>
    </pm-tabbar>
  </pm-layout>
</template>
<style scoped>
  /*.wrapper .pm-header {*/
  /*margin-bottom: 15px;*/
  /*}*/
</style>
<script>
  export default {
    data() {
      return {
        index: 0
      };
    }
  };
</script>
