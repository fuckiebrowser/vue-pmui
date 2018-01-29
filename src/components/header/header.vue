<template>
  <header class="pm-header"
          :class="{ fixed }">
    <div class="pm-header__left">
      <slot name="left">
        <pm-button @click="back">
          <i class="pm-icon icon-back"></i>
        </pm-button>
      </slot>
    </div>
    <div class="pm-header__title">
      <slot>{{title}}</slot>
    </div>
    <div class="pm-header__right">
      <slot name="right" />
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
        else history.back();
      }
    }
  };
</script>
