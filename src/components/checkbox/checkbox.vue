<template>
  <div class="pm-checkbox"
       :class="{ disabled, checked }"
       @click.stop="changeHandler">
    <transition name="zoom">
      <i class="pm-icon icon-check"
         v-if="checked"></i>
    </transition>
    <slot/>
    <input type="checkbox"
           :checked="checked"
           @change="changeHandler">
  </div>
</template>

<script type="text/jsx">
export default {
  name: 'PmCheckbox',
  props: {
    value: {
      type: [Boolean, String, Number, Array],
      default: () => false
    },
    label: {
      type: [Boolean, String, Number],
      default: () => false
    },
    trueLabel: {
      type: [String, Number]
    },
    falseLabel: {
      type: [String, Number]
    },
    disabled: Boolean
  },
  computed: {
    isStringOrNumber() {
      return typeof this.value === 'string' || typeof this.value === 'number';
    },
    isArray() {
      return Array.isArray(this.value);
    },
    checked() {
      if (this.isStringOrNumber) return this.trueLabel === this.value;
      if (this.isArray) return this.value.indexOf(this.label) >= 0;
      return this.value;
    }
  },
  methods: {
    changeHandler() {
      if (this.disabled) return;
      // this.currentChecked
      const checked = this.checked;
      let val = !checked;
      if (this.isStringOrNumber) {
        val = checked ? this.falseLabel : this.trueLabel;
      }
      if (this.isArray) {
        const copy = [...this.value];

        if (checked) {
          copy.splice(copy.indexOf(this.label), 1);
        } else {
          copy.push(this.label);
        }

        val = copy;
      }
      this.$emit('input', val);
    }
  }
};
</script>
