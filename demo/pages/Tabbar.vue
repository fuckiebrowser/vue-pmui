<template>
  <gay-layout title="Tabbar">
    <gay-tabbar v-model="index">
      <gay-tabbar-item icon="iconfont icon-home" :index="0">首页</gay-tabbar-item>
      <gay-tabbar-item icon="iconfont icon-cart" :index="1">购物车</gay-tabbar-item>
      <gay-tabbar-item icon="iconfont icon-people" :index="2">我的</gay-tabbar-item>
      <gay-tabbar-item icon="iconfont icon-settings" :index="3">设置</gay-tabbar-item>
    </gay-tabbar>
  </gay-layout>
</template>
<style scoped>
  /*.wrapper .gay-header {*/
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
