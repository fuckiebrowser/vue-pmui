<template>
  <footer class="gay-tabbar">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'GayTabbar',
    props: { type: String, value: [Number, String] },
    data() {
      return {
        items: [],
        activeIndex: this.value
      };
    },
    watch: {
      value(val) {
        this.activeIndex = val;
      },
      activeIndex(index) {
        this.$emit('input', index);
      }
    },
    computed: {
      styleClass() {
        const { type } = this;
        return {
          'gay-tabbar--primary': type === 'primary',
          'gay-tabbar--success': type === 'success',
          'gay-tabbar--warning': type === 'warning',
          'gay-tabbar--danger': type === 'danger'
        };
      }
    },
    methods: {
      getChildActive(childIndex) {
        return this.activeIndex === childIndex;
      },
      activeChild(childIndex) {
        this.activeIndex = childIndex;
      },
      registerChild(childIndex) {
        this.items.push(childIndex);
      },
      destroyChild(childIndex) {
        const index = this.items.indexOf(childIndex);
        this.items.splice(index, 1);
      }
    }
  };
</script>
