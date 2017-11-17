<script type="text/jsx">
  export default {
    name: 'GayTabs',
    render(h) {
      const navItems = this.tabs.map(tab => (
        <li class={[
          'gay-tabs-nav-item',
          this.currentIndex === tab.index ? 'active' : null
        ]}
            onClick={ev => this.clickHandler(tab.index)}
            v-ripple>
          {tab.currentTitle}
        </li>
      ));

      const nav = <ul class="gay-tabs-nav">{navItems}</ul>;
      const content = <div class="ga-tabs-content">{this.$slots.default}</div>;

      return (<div class="gay-tabs">
        {[nav, content]}
      </div>)
    },
    props: {
      value: [Number, String]
    },
    data() {
      return {
        currentIndex: this.value,
        tabs: []
      };
    },
    watch: {
      value(index) {
        this.currentIndex = index;
      },
      currentIndex(index) {
        this.$emit('input', index);
      }
    },
    methods: {
      clickHandler(index) {
        this.$emit('tabClick', index);
        this.currentIndex = index;
      },
      registerChild(child) {
        const { index, title, $slots } = child;
        const currentTitle = $slots.title || title;
        this.tabs.push({ index, currentTitle });
      },
      destroyChild(child) {
        const { index } = child;
        const childIndex = this.tabs.findIndex(tab => `${tab.index}` === `${index}`);
        if (childIndex < 0) return;
        this.tabs.splice(childIndex, 1);
      }
    }
  };
</script>
