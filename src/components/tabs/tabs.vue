<script type="text/jsx">
  import BetterScroll from "../better-scroll/better-scroll";

  export default {
    components: { BetterScroll },
    name: 'PmTabs',
    render(h) {
      const navItems = this.tabs.map(tab => (
        <a class={[
          'pm-tabs-nav-item',
          this.currentIndex === tab.index ? 'active' : null
        ]}
            onClick={ev => this.clickHandler(tab.index)}
            v-ripple>
          {tab.currentTitle}
        </a>
      ));

      const nav =
        <better-scroll ref="scroll"
                       style="width:100%;"
                       scrollX
                       tap="touchend"
                       data={this.tabs}>
          <div class="pm-tabs-nav"
              style={this.navStyle}>
            {navItems}
            <div class="pm-tabs-bar" style={this.barStyle}> </div>
          </div>
        </better-scroll>
      ;
      const content = <div class="pm-tabs-content">{this.$slots.default}</div>;

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
          // width: `${this.scrollWidth}px`
          width: `100%`
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
        const tabs = this.$el.querySelectorAll('.pm-tabs-nav-item');
        let width = 0;
        tabs.forEach((t) => {
          width += +t.offsetWidth;
        });
        this.scrollWidth = width;
      },
    },
    methods: {
      async autoScroll() {
        const currentTab = this.$el.querySelector('.pm-tabs-nav-item.active');
        this.barLeft = currentTab.offsetLeft;
        this.barWidth = currentTab.offsetWidth;
        this.$refs.scroll.scrollToElement(currentTab, 500, true);
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
      }
    },
    async mounted() {
      await this.$nextTick();
      this.autoScroll();
    }
  };
</script>
