<template>
  <button
    class="pm-button"
    :type="type"
    :class="btnClass"
    @click="handleClick"
    v-ripple>
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'pm-button',
    props: {
      type: { type: String, default: 'default' },
      size: { type: String, default: 'normal' },
      long: Boolean,
      round: Boolean,
      disabled: Boolean
    },
    computed: {
      btnClass() {
        const { type, size } = this;
        return {
//          'pm-button--default': ['primary', 'success', 'warning', 'danger'],
          'pm-button--primary': type === 'primary',
          'pm-button--success': type === 'success',
          'pm-button--warning': type === 'warning',
          'pm-button--danger': type === 'danger',
          'pm-button--small': size === 'small',
          'pm-button--long': this.long,
          'pm-button--disabled': this.disabled,
          'pm-button--round': this.round
        };
      }
    },
    methods: {
      handleClick(event) {
        if (this.disabled) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        this.$emit('click', event);
      }
    }
  };
</script>

<style lang="sass" rel="stylesheet/scss"></style>
