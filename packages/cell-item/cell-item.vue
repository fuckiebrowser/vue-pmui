<template>
  <label class="gay-cell-item">
    <div class="gay-cell-item__label">
      <slot name="label">
        {{label}}
      </slot>
    </div>
    <div class="gay-cell-item__content">
      <slot></slot>
      <i v-if="arrow" class="iconfont icon-right"></i>
    </div>
  </label>
</template>
<style scoped></style>
<script>
  export default {
    name: 'GayCellItem',
    props: {
      label: String,
      arrow: Boolean
    }
  };
</script>
