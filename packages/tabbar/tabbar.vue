<template>
  <footer class="gay-tabbar">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'GayTabbar',
    props: { type: String, index: Number },
    data() {
      return {
        items: [],
        activeIndex: this.index || 0
      };
    },
    watch: {
      index(index) {
        this.activeIndex = index;
      },
      activeIndex(index) {
        this.$emit('update:index', index);
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
      getChildActive(uid) {
        return +this.activeIndex === +this.items.indexOf(uid);
      },
      activeChild(uid) {
        this.activeIndex = this.items.indexOf(uid);
      },
      registerChild(uid) {
        this.items.push(uid);
      },
      destroyChild(uid) {
        const index = this.items.indexOf(uid);
        this.items.splice(index, 1);
      }
    }
  };
</script>
