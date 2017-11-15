<template>
  <gay-layout title="Tabs">
    <gay-tabs>
      <gay-tab-item index="0" title="0"></gay-tab-item>
      <gay-tab-item index="1" title="1"></gay-tab-item>
      <gay-tab-item index="2">
        <template slot="title">
          呵呵呵
          <gay-button size="small"><i class="iconfont icon-right"></i></gay-button>
        </template>
      </gay-tab-item>
    </gay-tabs>
  </gay-layout>
</template>
<style scoped>
</style>
<script>
  export default {
    data() {
      return { index: 1 };
    }
  };
</script>
