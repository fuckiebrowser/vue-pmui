<template>
  <div class="gay-swipe">
    <div class="gay-swipe-scroll"
         ref="swipe">
      <div class="gay-swipe-container"
           ref="container">
        <slot></slot>
      </div>
    </div>
    <div class="gay-swipe-dots"
         v-if="showDots">
      <span :class="{active: currentIndex === item}"
            v-for="item in dots"></span>
    </div>

    <a class="gay-swipe-prev"
       @click="prev"
       v-ripple>
      <i class="iconfont icon-back"></i>
    </a>
    <a class="gay-swipe-next"
       @click="next"
       v-ripple>
      <i class="iconfont icon-right"></i>
    </a>
  </div>

</template>
<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'GaySwipe',
    /**
     * @param {String} height 轮播高度
     * @param {Boolean} speed 动画滚动速度
     * @param {Boolean} loop 是否循环滚动
     * @param {Boolean} autoPlay 是否自动播放
     * @param {Boolean} showDots 是否显示导航点
     * @param {Boolean} interval 滚动间隔
     */
    props: {
      height: String,
      loop: Boolean,
      showDots: Boolean,
      speed: Number,
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        currentIndex: 1,
        dots: []
      };
    },
    methods: {
      initStyle() {
        const container = this.$refs.container;
        const swipe = this.$refs.swipe;
        const width = swipe.clientWidth;
        // init children
        this.children = [...container.children];
        // set child width
        this.children.forEach((child) => {
          child.style.width = `${width}px`;
        });
        // set container width
        container.style.width = `${this.children.length + (this.loop ? 2 : 0)}00%`;
        // set dots
        this.dots = this.children.length;
      },
      initScroll() {
        this.swipe = new BScroll(this.$refs.swipe, {
          momentum: false,
          scrollX: true,
          scrollY: false,
          click: true,
          tap: true,
          snap: {
            loop: this.loop,
            threshold: 0.1,
            speed: this.speed || 500,
            click: true,
            observeDOM: false
          }
        });

        const swipe = this.swipe;

        swipe.on('scrollEnd', () => {
          const { pageX } = swipe.getCurrentPage();
          this.currentIndex = pageX;
          this.$emit('change', pageX);
          this.play();
        });

        swipe.on('flick', () => {
          clearTimeout(this.timer);
        });
      },
      play() {
        this.timer = setTimeout(() => {
          this.next();
        }, this.interval);
      },
      next() {
        console.log('next');
        clearTimeout(this.timer);
        this.swipe.next();
      },
      prev() {
        console.log('prev');
        clearTimeout(this.timer);
        this.swipe.prev();
      }
    },
    async mounted() {
      await this.$nextTick();
      this.initStyle();
      this.initScroll();
      this.play();
    },
    beforeDestroy() {
      this.swipe.disable();
      clearTimeout(this.timer);
    }
  };
</script>
