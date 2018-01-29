<template>
  <div class="pm-swipe">
    <div class="pm-swipe__scroll"
         ref="swipe">
      <div class="pm-swipe__container"
           ref="container">
        <slot>
          {{currentIndex}}
        </slot>
      </div>
    </div>

    <div v-if="showDots"
         class="pm-swipe__dots">
      <span :class="{active: currentIndex === di}"
            v-for="(item, di) in dots"
            @click="jump(di)">
      </span>
    </div>

    <template v-if="showNav">
      <a class="pm-swipe__prev"
         @click="prev"
         v-ripple>
        <i class="pm-icon icon-back"></i>
      </a>
      <a class="pm-swipe__next"
         @click="next"
         v-ripple>
        <i class="pm-icon icon-right"></i>
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
     * @param {Number} speed 动画滚动速度
     * @param {Boolean} loop 是否循环滚动
     * @param {Boolean} autoPlay 是否自动播放
     * @param {Boolean} showDots 是否显示导航点
     * @param {Boolean} showNav 是否显示左右导航按钮
     * @param {Boolean} interval 滚动间隔
     * @param {Number} Index swipe索引值
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
      },
      index: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        swipe: null,
        currentIndex: 0,
        dots: []
      };
    },
    watch: {
      index: 'jump',
      currentIndex(index) {
        this.$emit('change', index);
        this.$emit('update:index', index);
      }
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
          this.play();
        });

        swipe.on('scrollEnd', () => {
          this.scrolling = false;
          const { pageX } = swipe.getCurrentPage();
          this.currentIndex = pageX;
          this.play();
        });
      },
      initDots() {
        // set dots
        this.dots = this.children.length;
      },
      play() {
        if (!this.autoPlay) return;
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
        if (this.scrolling || index === this.currentIndex) return;
        clearTimeout(this.timer);
        this.swipe.goToPage(index, 0, this.speed);
      }
    },
    async mounted() {
      await this.$nextTick();
      this.initStyle();
      this.initScroll();
      this.play();
      if (this.showDots) this.initDots();
    },
    beforeDestroy() {
      this.swipe.destroy();
      clearTimeout(this.timer);
    }
  };
</script>
