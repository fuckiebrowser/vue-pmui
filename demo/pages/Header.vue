<template>
  <gay-layout title="Header">
    <div class="wrapper">
      <gay-header title="默认"></gay-header>
      <gay-header title="右侧纯文字">
        <span slot="right">分享</span>
      </gay-header>

      <gay-header title="右侧按钮">
        <gay-button slot="right">分享</gay-button>
      </gay-header>

      <gay-header title="中间插槽">
        <input type="text" value="中间插槽">
      </gay-header>
    </div>
  </gay-layout>
</template>
<style scoped>
  .wrapper .gay-header {
    margin-bottom: 15px;
  }
</style>
<script>
  export default {};
</script>
