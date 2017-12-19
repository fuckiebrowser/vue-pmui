<template>
  <div class="gay-layout">
    <slot name="top">
      <gay-header :title="title"></gay-header>
    </slot>
    <section class="gay-container">
      <slot></slot>
    </section>
    <slot name="bottom"></slot>
  </div>
</template>
<style scoped></style>
<script>
  export default {
    name: 'GayLayout',
    props: { title: String }
  };
</script>
