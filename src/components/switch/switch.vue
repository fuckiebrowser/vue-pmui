<template>
  <button class="pm-switch"
          :class="typeClass"
          @click.stop="changeHandler">
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
      trueLabel: {
        type: [Boolean, String, Object],
        default: () => true
      },
      falseLabel: {
        type: [Boolean, String, Object],
        default: () => false
      },
      type: {
        type: String,
        default: () => ''
      },
      disabled: Boolean
    },
    computed: {
      checked() {
        return this.value === this.trueLabel;
      },
      typeClass() {
        const { checked, disabled } = this;
        return {
          checked,
          disabled,
          'pm-switch--danger': this.type === 'danger',
          'pm-switch--primary': this.type === 'primary',
          'pm-switch--success': this.type === 'success',
          'pm-switch--warning': this.type === 'warning'
        };
      }
    },
    methods: {
      changeHandler() {
        if (this.disabled) return;
        const val = this.checked ? this.falseLabel : this.trueLabel;
        this.$emit('input', val);
        this.$emit('change', val, this.value);
      }
    }
  };
</script>
