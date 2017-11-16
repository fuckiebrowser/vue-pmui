<template>
  <gay-layout title="Tabbar">
    <gay-tabbar :index.sync="index">
      <gay-tabbar-item icon="iconfont icon-home">首页</gay-tabbar-item>
      <gay-tabbar-item icon="iconfont icon-cart" badge>购物车</gay-tabbar-item>
      <gay-tabbar-item icon="iconfont icon-people" badge>我的</gay-tabbar-item>
      <gay-tabbar-item icon="iconfont icon-settings">设置</gay-tabbar-item>
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
