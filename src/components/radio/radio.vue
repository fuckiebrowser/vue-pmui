<template>
  <div class="pm-radio"
       :class="{ disabled, checked }"
       @click.stop="!disabled && $emit('input', label)">
    <transition name="zoom">
      <i class="pm-icon icon-radioboxfill"
         v-if="checked"></i>
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
      },
      disabled: Boolean
    },
    computed: {
      checked() {
        return this.value === this.label;
      }
    }
  };
</script>
