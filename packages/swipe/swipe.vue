<template>
  <div class="gay-swipe"
       ref="swipe">
    <div class="gay-swipe-container"
         ref="container">
      <slot></slot>
    </div>
    <div class="gay-swipe-dots" v-if="showDots">
      <span :class="{active: currentIndex === index}"
            v-for="(item, index) in dots"></span>
    </div>
  </div>

</template>
<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'GaySwipe',
    props: {
      height: String,
      loop: Boolean, // 是否循环播放
      showDots: Boolean// 是否显示导航点
    },
    data() {
      return {
        swipe: null,
        // swipeWidth: 100,
        currentIndex: 0,
        dots: 0
      };
    },
    methods: {
      initStyle() {
        const container = this.$refs.container;
        const swipe = this.$refs.swipe;
        const width = swipe.offsetWidth;
        // init children
        this.children = [...container.children];
        // set child width
        this.children.forEach((child) => {
          child.style.width = `${width}px`;
        });
        // set container width
        container.style.width = `${this.children.length + (this.loop ? 2 : 0)}00%`;
        // set dots
        this.dots = this.length;
      }
    },
    async mounted() {
      await this.$nextTick();

      this.initStyle();

      // init child width


      this.swipe = new BScroll(this.$refs.swipe, {
        scrollX: true,
        scrollY: false,
        snap: {
          loop: this.loop,
          threshold: 0.1,
          speed: 500,
          click: true,
          observeDOM: false
        }
      });
    }
  };
</script>
