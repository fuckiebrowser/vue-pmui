<template>
  <div>
    <gay-header title="Button"></gay-header>
    <div class="wrapper">
      <h2>small</h2>
      <gay-button size="small">default</gay-button>
      <gay-button size="small" type="primary">primary</gay-button>
      <gay-button size="small" type="danger">danger</gay-button>
      <h2>normal</h2>
      <gay-button>default</gay-button>
      <gay-button type="primary">primary</gay-button>
      <gay-button type="danger">danger</gay-button>
      <h2>long</h2>
      <gay-button long>default</gay-button>
      <gay-button type="primary" long>primary</gay-button>
      <gay-button type="danger" long>danger</gay-button>
    </div>
  </div>
</template>
<style scoped>
  .gay-button {
    margin-bottom: 15px;
  }
</style>
<script>
  export default {};
</script>
