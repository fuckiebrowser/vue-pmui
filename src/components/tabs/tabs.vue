<script type="text/jsx">
  // import BetterScroll from "../better-scroll/better-scroll";
  import BScroll from 'better-scroll';

  export default {
    // components: { BetterScroll },
    name: 'PmTabs',
    render(h) {
      const navItems = this.tabs.map(tab => (
        <a onClick={ev => this.clickHandler(tab.index)}
           v-ripple
           class={[
             'pm-tabs__nav-item',
             this.currentIndex === tab.index ? 'active' : null
           ]}>
          {/* onClick={ev => this.clickHandler(tab.index)} */}
          {tab.currentTitle}
        </a>
      ));

      const nav =
        <div ref="scroll"
             class="pm-tabs__wrapper">
          <div class="pm-tabs__nav"
               style={this.navStyle}>
            {navItems}
            <div class="pm-tabs__bar"
                 style={this.barStyle}/>
          </div>
        </div>
      ;
      const content = <div class="pm-tabs__content">{this.$slots.default}</div>;

      return (<div class="pm-tabs">
        {[nav, content]}
      </div>)
    },
    props: {
      value: [Number, String]
    },
    computed: {
      navStyle() {
        return {
          width: `${this.scrollWidth}px`
          // width: `100%`
        };
      },
      barStyle() {
        return {
          width: `${this.barWidth}px`,
          transform: `translate(${this.barLeft}px,0)`
        };
      }
    },
    data() {
      return {
        barLeft: 0,
        barWidth: 0,
        scrollWidth: 0,
        scroll: null,
        currentIndex: this.value,
        tabs: []
      };
    },
    watch: {
      value(index) {
        this.currentIndex = index;
      },
      async currentIndex(index) {
        this.$emit('input', index);
        await this.$nextTick();
        this.autoScroll();
      },
      async tabs() {
        await this.$nextTick();
        this.initNav();
      },
    },
    methods: {
      async autoScroll() {
        const currentTab = this.$el.querySelector('.pm-tabs__nav-item.active');
        this.barLeft = currentTab.offsetLeft;
        this.barWidth = currentTab.offsetWidth;
        this.scroll.scrollToElement(currentTab, 500, true);
      },
      clickHandler(index) {
        this.$emit('tabClick', index);
        this.currentIndex = index;
      },
      registerChild(child) {
        const { index, title, $slots, $el } = child;
        const currentTitle = $slots.title || title;
        this.tabs.push({ index, currentTitle, $el });
      },
      destroyChild(child) {
        const { index } = child;
        const childIndex = this.tabs.findIndex(tab => `${tab.index}` === `${index}`);
        if (childIndex < 0) return;
        this.tabs.splice(childIndex, 1);
      },
      initNav() {
        const navList = this.$refs.scroll.querySelectorAll('.pm-tabs__nav-item');
        const scrollWidth = this.$refs.scroll.offsetWidth;
        const currentWidth = [...navList].reduce((a, b) => {
          return a + b.offsetWidth;
        }, 0);
        this.scrollWidth = currentWidth < scrollWidth ? scrollWidth : currentWidth;

        if (this.scroll) {
          this.scroll.refresh();
          this.autoScroll();
        }
      },
      initScroll() {
        this.initNav();
        this.scroll = new BScroll(this.$refs.scroll, {
          probeType: 1,
          click: true,
          scrollX: true,
          scrollY: false
        });
        this.$nextTick(this.autoScroll);
      }
    },
    async mounted() {
      await this.$nextTick();
      setTimeout(this.initScroll, 20);
    }
  };
</script>
