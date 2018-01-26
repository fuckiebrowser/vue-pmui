<template>
  <div class="pm-radio"
       :class="{ disabled, checked }"
       @click.stop="changeHanlder">
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
        type: [Boolean, String, Number, Object],
        default: () => ''
      },
      label: {
        type: [Boolean, String, Number, Object],
        default: () => ''
      },
      disabled: Boolean
    },
    computed: {
      checked() {
        return this.value === this.label;
      }
    },
    methods: {
      changeHanlder() {
        if (this.disabled) return;
        this.$emit('input', this.label);
        this.$emit('change', this.label, this.value);
      }
    }
  };
</script>
