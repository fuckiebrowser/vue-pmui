<template>
  <header class="gay-header"
          :class="{ fixed }">
    <div class="gay-header-left">
      <slot name="left">
        <a @click="back"><i class="iconfont icon-back"></i></a>
      </slot>
    </div>
    <div class="gay-header-title">
      <slot>{{title}}</slot>
    </div>
    <div class="gay-header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'GayHeader',
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
