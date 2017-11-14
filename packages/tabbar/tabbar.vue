<template>
  <div class="gay-tabbar">
    <slot></slot>
  </div>
</template>

<script>
  import GayButton from '../button';

  export default {
    components: { GayButton },
    name: 'GayTabbar',
    props: {
      title: String,
      fixed: Boolean
    },
    methods: {
      back() {
        if (this.$router) this.$router.back();
      }
    }
  };
</script>
