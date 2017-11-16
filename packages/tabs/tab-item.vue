<template>
  <div class="gay-tab-item"
       :class="{ [activeClass]: active }">
    {{title}}
    <gay-badge></gay-badge>
  </div>
</template>

<script>
  export default {
    name: 'GayTabItem',
    props: {
      index: [String, Number],
      title: [String, Number],
      activeClass: {
        type: String,
        default: 'gay-tab-panel-active'
      }
    },
    computed: {
      active() {
      }
    },
    methods: {},
    created() {
      this.$parent.$forceUpdate();
    }
  };
</script>
