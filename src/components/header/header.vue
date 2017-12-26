<template>
  <header class="pm-header"
          :class="{ fixed }">
    <div class="pm-header-left">
      <slot name="left">
        <pm-button @click="back"><i class="iconfont icon-back"></i></pm-button>
      </slot>
    </div>
    <div class="pm-header-title">
      <slot>{{title}}</slot>
    </div>
    <div class="pm-header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
  import PmButton from '../button';

  export default {
    components: { PmButton },
    name: 'PmHeader',
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
