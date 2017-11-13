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
      disabled: Boolean
    },
    computed: {
      btnClass() {
        const { type, size } = this;
        return {
          'gay-button--primary': type === 'primary',
          'gay-button--default': type === 'default',
          'gay-button--danger': type === 'danger',
          'gay-button--sm': size === 'small',
          'gay-button--lg': size === 'large',
          'gay-button--disabled': this.disabled
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
