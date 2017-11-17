<template>
  <gay-layout title="Tabs">
    <gay-tabs v-model="index">
      <gay-tab-item index="0" title="0">1</gay-tab-item>
      <gay-tab-item index="1" title="1">2</gay-tab-item>
      <gay-tab-item index="2">
        <template slot="title">
          呵呵呵
          <gay-badge type="danger" size="small"></gay-badge>
        </template>
        3
      </gay-tab-item>
    </gay-tabs>
  </gay-layout>
</template>

<style scoped>

</style>
<script>
  export default {
    data() {
      return { index: '1' };
    }
  };
</script>
