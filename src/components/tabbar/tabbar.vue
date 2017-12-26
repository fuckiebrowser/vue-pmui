<template>
  <footer class="pm-tabbar">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'PmTabbar',
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
          'pm-tabbar--primary': type === 'primary',
          'pm-tabbar--success': type === 'success',
          'pm-tabbar--warning': type === 'warning',
          'pm-tabbar--danger': type === 'danger'
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
