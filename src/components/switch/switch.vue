<template>
  <button class="pm-switch"
          :class="typeClass"
          @click="clickHandler">
    <span class="pm-switch--inner"></span>
  </button>
</template>

<script>
  export default {
    name: 'PmSwitch',
    props: {
      value: {
        type: [Boolean, String, Object],
        default: () => false
      },
      trueValue: {
        type: [Boolean, String, Object],
        default: () => true
      },
      falseValue: {
        type: [Boolean, String, Object],
        default: () => false
      },
      type: {
        type: String,
        default: () => ''
      }
    },
    computed: {
      isChecked() {
        return this.value === this.trueValue;
      },
      typeClass() {
        return {
          checked: this.isChecked,
          'pm-switch--danger': this.type === 'danger',
          'pm-switch--primary': this.type === 'primary',
          'pm-switch--success': this.type === 'success',
          'pm-switch--warning': this.type === 'warning'
        };
      }
    },
    methods: {
      clickHandler() {
        this.$emit('input', this.isChecked ? this.falseValue : this.trueValue);
      }
    }
  };
</script>
