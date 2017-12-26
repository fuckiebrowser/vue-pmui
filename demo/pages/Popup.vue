<template>
  <pm-layout title="Popup">
    <pm-cell-group>
      <pm-cell-item @click.native="center = true"
                     label="center"
                     v-ripple
                     arrow>
      </pm-cell-item>
      <pm-cell-item @click.native="top = true"
                     label="top"
                     v-ripple
                     arrow>
      </pm-cell-item>
      <pm-cell-item @click.native="left = true"
                     label="left"
                     v-ripple
                     arrow>
      </pm-cell-item>
      <pm-cell-item @click.native="right = true"
                     label="right"
                     v-ripple
                     arrow>
      </pm-cell-item>
      <pm-cell-item @click.native="bottom = true"
                     label="bottom"
                     v-ripple
                     arrow>
      </pm-cell-item>
    </pm-cell-group>

    <pm-popup
      :visible.sync="center"
      @mask-click="center = false">
      <div class="popup-center">center</div>
    </pm-popup>
    <pm-popup
      :visible.sync="top"
      position="top"
      @mask-click="top = false">
      <div class="popup-top">top</div>
    </pm-popup>
    <pm-popup
      :visible.sync="left"
      position="left"
      @mask-click="left = false">
      <div class="popup-left">left</div>
    </pm-popup>
    <pm-popup
      :visible.sync="right"
      position="right"
      @mask-click="right = false">
      <div class="popup-right">right</div>
    </pm-popup>
    <pm-popup
      :visible.sync="bottom"
      position="bottom"
      @mask-click="bottom = false">
      <div class="popup-bottom">bottom</div>
    </pm-popup>
  </pm-layout>
</template>
<style lang="scss"
       scoped>
  .popup {
    &-top,
    &-left,
    &-right,
    &-bottom,
    &-center {
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
        bottom: false,
        center: false
      };
    }
  };
</script>
