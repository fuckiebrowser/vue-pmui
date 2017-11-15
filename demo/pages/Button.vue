<template>
  <gay-layout title="Button">
    <div class="wrapper">
      <h2>Small</h2>
      <gay-button size="small">default</gay-button>
      <gay-button size="small" type="primary">primary</gay-button>
      <gay-button size="small" type="danger">danger</gay-button>
      <h2>Normal</h2>
      <gay-button>default</gay-button>
      <gay-button type="primary">primary</gay-button>
      <gay-button type="danger">danger</gay-button>
      <h2>Long</h2>
      <gay-button long>default</gay-button>
      <gay-button type="primary" long>primary</gay-button>
      <gay-button type="danger" long>danger</gay-button>
      <h2>Round</h2>
      <gay-button round long>default</gay-button>
      <gay-button type="primary" round long>primary</gay-button>
      <gay-button type="danger" round long>danger</gay-button>
    </div>
  </gay-layout>
</template>
<style scoped>
  .gay-button {
    margin-bottom: 15px;
  }
</style>
<script>
  export default {};
</script>
