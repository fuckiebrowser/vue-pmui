<template>
  <gay-layout title="Popup">
    <gay-cell-group>
      <gay-cell-item
        @click.native="top = true"
        label="top"
        v-ripple
        arrow>
      </gay-cell-item>
      <gay-cell-item
        @click.native="left = true"
        label="left"
        v-ripple
        arrow>
      </gay-cell-item>
      <gay-cell-item
        @click.native="right = true"
        label="right"
        v-ripple
        arrow>
      </gay-cell-item>
      <gay-cell-item
        @click.native="bottom = true"
        label="bottom"
        v-ripple
        arrow>
      </gay-cell-item>
    </gay-cell-group>

    <gay-popup
      :visible.sync="top"
      position="top">
      <div class="popup-top">top</div>
    </gay-popup>
    <gay-popup
      :visible.sync="left"
      position="left">
      <div class="popup-left">left</div>
    </gay-popup>
    <gay-popup
      :visible.sync="right"
      position="right">
      <div class="popup-right">right</div>
    </gay-popup>
    <gay-popup
      :visible.sync="bottom"
      position="bottom">
      <div class="popup-bottom">bottom</div>
    </gay-popup>
  </gay-layout>
</template>
<style lang="scss"
       scoped>
  .popup {
    &-top,
    &-left,
    &-right,
    &-bottom {
      background: #fff;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &-top,
    &-bottom {
      width: 100vw;
    }

    &-left,
    &-right {
      height: 100vh;
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        top: false,
        left: false,
        right: false,
        bottom: false
      };
    }
  };
</script>
