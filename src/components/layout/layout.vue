<template>
  <div class="pm-layout">
    <slot name="top">
      <pm-header :title="title"></pm-header>
    </slot>
    <section class="pm-container">
      <slot></slot>
    </section>
    <slot name="bottom"></slot>
  </div>
</template>
<style scoped></style>
<script>
  export default {
    name: 'PmLayout',
    props: { title: String }
  };
</script>
