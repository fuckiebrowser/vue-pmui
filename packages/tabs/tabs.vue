<script>
  export default {
    name: 'GayTabs',
    render(h) {
//      this.$slots.default.filter(item => {
//        return item.elm.nodeType === 1 && /\bel-tab-pane\b/.test(item.elm.className);
//      }).indexOf(item.$vnode);
      const navItems = this.$slots.default
        .filter(v => v.componentOptions && v.componentOptions.tag === 'gay-tab-item') // 拿到子级里的gay-tab-item的vnode
        .map(v => v.componentInstance || v.componentOptions.propsData) // 拿到子级里的gay-tab-item的组件实例
        .map(props => h('li', {
          domProps: {
            className: `gay-tab-nav-item ${this.index === props.index ? 'active' : ''}`
          }
        }, props.$slots ? props.$slots.default : props.title)); // 拿到子级里的gay-tab-item的组件实例
      const nav = h('ul', { domProps: { className: 'gay-tabs-nav' } }, navItems);


      return h('div', { domProps: { className: 'gay-tabs' } }, [nav, this.$slots.default]);
    },
    props: {
      value: [Number, String]
    }
  };
</script>
