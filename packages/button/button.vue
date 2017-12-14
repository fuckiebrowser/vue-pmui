<template>
  <button
    class="gay-button"
    :type="type"
    :class="btnClass"
    @click="handleClick"
    v-ripple>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'gay-button',
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
//          'gay-button__default': ['primary', 'success', 'warning', 'danger'],
          'gay-button__primary': type === 'primary',
          'gay-button__success': type === 'success',
          'gay-button__warning': type === 'warning',
          'gay-button__danger': type === 'danger',
          'gay-button__small': size === 'small',
          'gay-button__long': this.long,
          'gay-button__disabled': this.disabled,
          'gay-button__round': this.round
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
