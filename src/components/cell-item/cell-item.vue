<template>
  <label class="pm-cell-item"
         @click="clickHandler">
    <div class="pm-cell-item--label">
      <slot name="label">
        {{label}}
      </slot>
    </div>
    <div class="pm-cell-item--content">
      <slot />
      <i v-if="arrow"
         class="pm-icon icon-right"></i>
    </div>
  </label>
</template>
<style scoped></style>
<script>
  export default {
    name: 'PmCellItem',
    props: {
      label: String,
      arrow: Boolean,
      link: [String, Object],
      route: Boolean
    },
    methods: {
      clickHandler() {
        if (!this.link) {
          return;
        }
        if (this.route && this.$router) {
          this.$router.push(this.link);
          return;
        }
        location.href = this.link;
      }
    }
  };
</script>
