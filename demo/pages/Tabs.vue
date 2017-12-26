<template>
  <pm-layout title="Tabs">
    <pm-tabs v-model="index">
      <pm-tab-item index="0" title="0">1</pm-tab-item>
      <pm-tab-item index="1" title="1">2</pm-tab-item>
      <pm-tab-item index="2">
        <template slot="title">
          呵呵呵dadadadada
          <pm-badge type="danger" size="small"></pm-badge>
        </template>
        3
      </pm-tab-item>
      <pm-tab-item index="3" title="3">3</pm-tab-item>
      <pm-tab-item index="4" title="4">4</pm-tab-item>
      <pm-tab-item index="5" title="5">5</pm-tab-item>
      <pm-tab-item index="6" title="6">6</pm-tab-item>
      <pm-tab-item index="7" title="7">7</pm-tab-item>
    </pm-tabs>
  </pm-layout>
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
