<template>
  <div class="pm-radio" @click.stop="$emit('input', label)">
    <transition name="zoom">
      <i class="pm-icon icon-radioboxfill"
         v-if="value === label"></i>
    </transition>
    <slot/>
  </div>
</template>

<script type="text/jsx">
export default {
  name: 'PmRadio',
  props: {
    value: {
      type: [Boolean, String, Number],
      default: () => ''
    },
    label: {
      type: [Boolean, String, Number],
      default: () => ''
    }
  }
};
</script>
