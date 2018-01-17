<template>
  <pm-layout title="Popup">
    <pm-cell-group>
      <pm-cell-item @click.native="center = true"
                    title="center"
                    v-ripple
                    arrow>
      </pm-cell-item>
      <pm-cell-item @click.native="top = true"
                    title="top"
                    v-ripple
                    arrow>
      </pm-cell-item>
      <pm-cell-item @click.native="left = true"
                    title="left"
                    v-ripple
                    arrow>
      </pm-cell-item>
      <pm-cell-item @click.native="right = true"
                    title="right"
                    v-ripple
                    arrow>
      </pm-cell-item>
      <pm-cell-item @click.native="bottom = true"
                    title="bottom"
                    v-ripple
                    arrow>
      </pm-cell-item>
    </pm-cell-group>

    <transition-group name="fade">
      <pm-popup key="center"
                v-show="center"
                @mask-click="center = false">
        <transition name="zoom">
          <div class="popup-center"
               v-show="center">
            center
          </div>
        </transition>
      </pm-popup>
      <pm-popup key="top"
                v-show="top"
                position="top"
                @mask-click="top = false">
        <transition name="slide-from-top">
          <div class="popup-top"
               v-show="top">
            top
          </div>
        </transition>
      </pm-popup>
      <pm-popup key="left"
                v-show="left"
                position="left"
                @mask-click="left = false">
        <transition name="slide-from-left">
          <div class="popup-left"
               v-show="left">
            left
          </div>
        </transition>
      </pm-popup>
      <pm-popup key="right"
                v-show="right"
                position="right"
                @mask-click="right = false">
        <transition name="slide-from-right">
          <div class="popup-right"
               v-show="right">
            right
          </div>
        </transition>
      </pm-popup>
      <pm-popup key="bottom"
                v-show="bottom"
                position="bottom"
                @mask-click="bottom = false">
        <transition name="slide-from-bottom">
          <div class="popup-bottom"
               v-show="bottom">
            bottom
          </div>
        </transition>
      </pm-popup>
    </transition-group>
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
