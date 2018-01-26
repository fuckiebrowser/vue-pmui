<template>
  <pm-layout title="Header">
    <div class="wrapper">
      <pm-header title="默认"/>
      <pm-header title="右侧纯文字">
        <span slot="right">分享</span>
      </pm-header>

      <pm-header title="右侧按钮">
        <pm-button slot="right">分享</pm-button>
      </pm-header>

      <pm-header title="中间插槽">
        <input type="text"
               value="中间插槽"
               placeholder="中间插槽">
      </pm-header>
    </div>
  </pm-layout>
</template>
<style scoped>
  .wrapper .pm-header {
    margin-bottom: 15px;
  }
</style>
<script>
  export default {};
</script>
