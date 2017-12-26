<template>
  <pm-layout title="Button">
    <div class="wrapper">
      <h2>Small</h2>
      <pm-button size="small">default</pm-button>
      <pm-button size="small" type="primary">primary</pm-button>
      <pm-button size="small" type="success">success</pm-button>
      <pm-button size="small" type="warning">warning</pm-button>
      <pm-button size="small" type="danger">danger</pm-button>
      <h2>Normal</h2>
      <pm-button>default</pm-button>
      <pm-button type="primary">primary</pm-button>
      <pm-button type="success">success</pm-button>
      <pm-button type="warning">warning</pm-button>
      <pm-button type="danger">danger</pm-button>
      <h2>Long</h2>
      <pm-button long>default</pm-button>
      <pm-button type="primary" long>primary</pm-button>
      <pm-button type="success" long>success</pm-button>
      <pm-button type="warning" long>warning</pm-button>
      <pm-button type="danger" long>danger</pm-button>
      <h2>Round</h2>
      <pm-button size="small" round>default</pm-button>
      <pm-button type="primary" size="small" round>primary</pm-button>
      <pm-button type="success" size="small" round>success</pm-button>
      <pm-button type="warning" size="small" round>warning</pm-button>
      <pm-button type="danger" size="small" round>danger</pm-button>
    </div>
  </pm-layout>
</template>
<style scoped>
  .pm-button {
    margin-bottom: 15px;
  }
</style>
<script>
  export default {};
</script>
