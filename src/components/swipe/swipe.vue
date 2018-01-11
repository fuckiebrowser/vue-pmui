<template>
  <div class="pm-swipe">
    <div class="pm-swipe-scroll"
         ref="swipe">
      <div class="pm-swipe-container"
           ref="container">
        <slot>
          {{currentIndex}}
        </slot>
      </div>
    </div>

    <div v-if="showDots"
         class="pm-swipe-dots">
      <span :class="{active: currentIndex === item}"
            v-for="item in dots"
            @click="jump(item)">
      </span>
    </div>

    <template v-if="showNav">
      <a class="pm-swipe-prev"
         @click="prev"
         v-ripple>
        <i class="iconfont icon-back"></i>
      </a>
      <a class="pm-swipe-next"
         @click="next"
         v-ripple>
        <i class="iconfont icon-right"></i>
      </a>
    </template>
  </div>

</template>
<script>
  import BScroll from 'better-scroll';

  export default {
    name: 'PmSwipe',
    /**
     * @param {String} height 轮播高度
     * @param {Boolean} speed 动画滚动速度
     * @param {Boolean} loop 是否循环滚动
     * @param {Boolean} autoPlay 是否自动播放
     * @param {Boolean} showDots 是否显示导航点
     * @param {Boolean} showNav 是否显示左右导航按钮
     * @param {Boolean} interval 滚动间隔
     */
    props: {
      height: String,
      loop: Boolean,
      showDots: Boolean,
      showNav: Boolean,
      speed: {
        type: Number,
        default: 500
      },
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
        swipe: null,
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
      },
      initScroll() {
        this.swipe = new BScroll(this.$refs.swipe, {
          momentum: false,
          scrollX: true,
          scrollY: false,
          click: true,
          tap: true,
          probeType: 2,
          snap: {
            loop: this.loop,
            threshold: 0.1,
            speed: this.speed,
            click: true,
            observeDOM: false
          }
        });

        const swipe = this.swipe;

        swipe.on('beforeScrollStart', () => {
          this.scrolling = true;
          clearTimeout(this.timer);
        });

        swipe.on('scrollCancel', () => {
          this.scrolling = false;
          if (this.autoPlay) this.play();
        });

        swipe.on('scrollEnd', () => {
          const { pageX } = swipe.getCurrentPage();
          this.currentIndex = pageX;
          this.$emit('change', pageX);
          this.play();
        });
      },
      initDots() {
        // set dots
        this.dots = this.children.length;
      },
      play() {
        this.timer = setTimeout(() => {
          this.next();
        }, this.interval);
      },
      next() {
        if (this.scrolling) return;
        clearTimeout(this.timer);
        this.swipe.next();
      },
      prev() {
        if (this.scrolling) return;
        clearTimeout(this.timer);
        this.swipe.prev();
      },
      jump(index) {
        if (this.scrolling) return;
        clearTimeout(this.timer);
        this.swipe.goToPage(index, 0, this.speed);
      }
    },
    async mounted() {
      await this.$nextTick();
      this.initStyle();
      this.initScroll();
      if (this.autoPlay) this.play();
      if (this.showDots) this.initDots();
    },
    beforeDestroy() {
      this.swipe.destroy();
      clearTimeout(this.timer);
    }
  };
</script>
