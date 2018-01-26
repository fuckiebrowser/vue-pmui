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
        type: [Boolean, String, Number, Object],
        default: () => false
      },
      trueLabel: {
        type: [Boolean, String, Number, Object],
        default: () => true
      },
      falseLabel: {
        type: [Boolean, String, Number, Object],
        default: () => false
      },
      disabled: Boolean
    },
    computed: {
      // value是数组时即多选
      isMultiple() {
        return Array.isArray(this.value);
      },
      checked() {
        if (this.isMultiple) return this.value.indexOf(this.label) >= 0;
        else return this.value === this.trueLabel;
      }
    },
    methods: {
      changeHandler() {
        if (this.disabled) return;
        const checked = this.checked;
        let val;
        if (this.isMultiple) {
          const copy = [...this.value];
          if (checked) {
            copy.splice(copy.indexOf(this.label), 1);
          } else {
            copy.push(this.label);
          }
          val = copy;
        } else {
          val = checked ? this.falseLabel : this.trueLabel;
        }
        this.$emit('input', val);
        this.$emit('change', val, this.value);
      }
    }
  };
</script>
