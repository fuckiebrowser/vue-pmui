<template>
  <div class="gay-tabs-content-item"
       v-show="show">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'GayTabItem',
    props: {
      index: {
        type: [String, Number],
        require: true
      },
      title: [String, Number]
    },
    computed: {
      show() {
        return this.$parent.currentIndex === this.index;
      }
    },
    mounted() {
      const registerChild = this.$parent.registerChild;
      if (registerChild) registerChild(this);
    },
    beforeDestroy() {
      const destroyChild = this.$parent.destroyChild;
      if (destroyChild) destroyChild(this);
    }
  };
</script>
