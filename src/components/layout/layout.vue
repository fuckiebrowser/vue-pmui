<template>
  <div class="pm-layout">
    <slot name="top">
      <pm-header :title="title"/>
    </slot>
    <section class="pm-container">
      <slot/>
    </section>
    <slot name="bottom"/>
  </div>
</template>
<script>
  export default {
    name: 'PmLayout',
    props: { title: String }
  };
</script>
