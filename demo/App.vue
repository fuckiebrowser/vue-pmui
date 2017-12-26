<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="app-view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: ''
      };
    },
    watch: {
      $route(to, from) {
        // slide
        if (to.path === '/') {
          this.transitionName = 'slide-out';
          return;
        }

        const toLength = to.path.split('/').length;
        const fromLength = from.path.split('/').length;
        this.transitionName = (toLength < fromLength) ? 'slide-out' : 'slide-in';
      }
    }
  };
</script>

<style lang="scss">
  @import '../src/styles/index';

  body {
    margin: 0;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5 {
    font-weight: normal;
  }

  .pm-header.fixed + .wrapper {
    padding-top: 60px;
  }

  .pm-layout {
    transform: translateZ(0);
    background: #efeff4;
  }

  .pm-container {
    padding: 15px 0;
  }

  .slide-out-enter-active,
  .slide-in-leave-active {
    position: absolute;
    top: 0;
  }

  .slide-in-enter-active,
  .slide-in-leave-active,
  .slide-out-enter-active,
  .slide-out-leave-active {
    transition: all 0.3s;
  }

  .slide-out-enter-active,
  .slide-in-leave-active {
    z-index: -1;
  }

  .slide-out-leave-active,
  .slide-in-enter-active {
    box-shadow: 0 0 40px #666;
    z-index: 100;
  }

  .slide-out-leave-active,
  .slide-in-enter {
    transform: translate3d(100%, 0, 0);
  }

</style>
