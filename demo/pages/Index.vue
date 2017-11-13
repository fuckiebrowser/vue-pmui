<template>
  <div>
    <gay-header fixed>菜单</gay-header>
    <div class="wrapper">
      <gay-button long @click="$router.push('/button')">button</gay-button>
      <gay-button long @click="$router.push('/header')">header</gay-button>
    </div>
  </div>
</template>
<style scoped>
  .gay-button + .gay-button {
    margin-top: 5px;
  }
</style>
<script>
  export default {};
</script>
