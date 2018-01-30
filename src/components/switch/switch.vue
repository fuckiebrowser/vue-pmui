<template>
  <button class="pm-switch"
          :class="typeClass"
          @click.stop="changeHandler">
    <span class="pm-switch__inner"></span>
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
        const { checked, disabled, type } = this;
        const isPrimary = !['danger', 'success', 'warning'].includes(type);
        const realType = isPrimary ? 'primary' : type;
        return {
          checked,
          disabled,
          [`pm-switch--${realType}`]: !disabled
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
