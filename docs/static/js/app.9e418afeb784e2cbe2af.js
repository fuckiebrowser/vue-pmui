webpackJsonp([9],{

/***/ "5Pyl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9X7l":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ZmQO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dGBo":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iXgl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/_vue@2.5.3@vue/dist/vue.esm.js
var vue_esm = __webpack_require__("5vqR");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./demo/App.vue
//
//
//
//
//
//
//
//

/* harmony default export */ var App = ({
  name: 'app',
  data: function data() {
    return {
      transitionName: ''
    };
  },

  watch: {
    $route: function $route(to, from) {
      // slide
      if (to.path === '/') {
        this.transitionName = 'slide-out';
        return;
      }

      var toLength = to.path.split('/').length;
      var fromLength = from.path.split('/').length;
      this.transitionName = toLength < fromLength ? 'slide-out' : 'slide-in';
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-678f13ba","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./demo/App.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('transition',{attrs:{"name":_vm.transitionName}},[_c('router-view',{staticClass:"app-view"})],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_demo_App = (esExports);
// CONCATENATED MODULE: ./demo/App.vue
function injectStyle (ssrContext) {
  __webpack_require__("9X7l")
}
var normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  App,
  selectortype_template_index_0_demo_App,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var demo_App = (Component.exports);

// EXTERNAL MODULE: ./node_modules/_vue-router@3.0.1@vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("zO6J");

// CONCATENATED MODULE: ./demo/router/index.js



vue_esm["a" /* default */].use(vue_router_esm["a" /* default */]);

/* harmony default export */ var router = (new vue_router_esm["a" /* default */]({
  routes: [
    { path: '/', name: 'Index', component: () => __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "sWeK")) },
    { path: '/button', name: 'Button', component: () => __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "PPzy")) },
    { path: '/header', name: 'Header', component: () => __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "OVfb")) },
    { path: '/tabbar', name: 'tabbar', component: () => __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "Ixuk")) },
    { path: '/tabs', name: 'tabs', component: () => __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "vRqp")) },
    { path: '/badge', name: 'badge', component: () => __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "50Sw")) },
    { path: '/cell', name: 'badge', component: () => __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "buR/")) },
    { path: '/swipe', name: 'swipe', component: () => __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "jS+t")) }
  ]
}));

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/button/button.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var button_button = ({
  name: 'gay-button',
  props: {
    type: { type: String, default: 'default' },
    size: { type: String, default: 'normal' },
    long: Boolean,
    round: Boolean,
    disabled: Boolean
  },
  computed: {
    btnClass: function btnClass() {
      var type = this.type,
          size = this.size;

      return {
        //          'gay-button--default': ['primary', 'success', 'warning', 'danger'],
        'gay-button--primary': type === 'primary',
        'gay-button--success': type === 'success',
        'gay-button--warning': type === 'warning',
        'gay-button--danger': type === 'danger',
        'gay-button--small': size === 'small',
        'gay-button--long': this.long,
        'gay-button--disabled': this.disabled,
        'gay-button--round': this.round
      };
    }
  },
  methods: {
    handleClick: function handleClick(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      this.$emit('click', event);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-3da2e712","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/button/button.vue
var button_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"gay-button",class:_vm.btnClass,attrs:{"type":_vm.type},on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var button_staticRenderFns = []
var button_esExports = { render: button_render, staticRenderFns: button_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_button_button = (button_esExports);
// CONCATENATED MODULE: ./packages/button/button.vue
function button_injectStyle (ssrContext) {
  __webpack_require__("dGBo")
}
var button_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var button___vue_template_functional__ = false
/* styles */
var button___vue_styles__ = button_injectStyle
/* scopeId */
var button___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var button___vue_module_identifier__ = null
var button_Component = button_normalizeComponent(
  button_button,
  selectortype_template_index_0_packages_button_button,
  button___vue_template_functional__,
  button___vue_styles__,
  button___vue_scopeId__,
  button___vue_module_identifier__
)

/* harmony default export */ var packages_button_button = (button_Component.exports);

// CONCATENATED MODULE: ./packages/button/index.js


packages_button_button.install = Vue => Vue.component(packages_button_button.name, packages_button_button);

/* harmony default export */ var packages_button = (packages_button_button);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/header/header.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var header = ({
  components: { GayButton: packages_button },
  name: 'GayHeader',
  props: {
    title: String,
    fixed: Boolean
  },
  methods: {
    back: function back() {
      if (this.$router) this.$router.back();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-6688adbb","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/header/header.vue
var header_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"gay-header",class:{ fixed: _vm.fixed }},[_c('div',{staticClass:"gay-header-left"},[_vm._t("left",[_c('gay-button',{on:{"click":_vm.back}},[_c('i',{staticClass:"iconfont icon-back"})])])],2),_vm._v(" "),_c('div',{staticClass:"gay-header-title"},[_vm._t("default",[_vm._v(_vm._s(_vm.title))])],2),_vm._v(" "),_c('div',{staticClass:"gay-header-right"},[_vm._t("right")],2)])}
var header_staticRenderFns = []
var header_esExports = { render: header_render, staticRenderFns: header_staticRenderFns }
/* harmony default export */ var header_header = (header_esExports);
// CONCATENATED MODULE: ./packages/header/header.vue
var header_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var header___vue_template_functional__ = false
/* styles */
var header___vue_styles__ = null
/* scopeId */
var header___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var header___vue_module_identifier__ = null
var header_Component = header_normalizeComponent(
  header,
  header_header,
  header___vue_template_functional__,
  header___vue_styles__,
  header___vue_scopeId__,
  header___vue_module_identifier__
)

/* harmony default export */ var packages_header_header = (header_Component.exports);

// CONCATENATED MODULE: ./packages/header/index.js


packages_header_header.install = Vue => Vue.component(packages_header_header.name, packages_header_header);

/* harmony default export */ var packages_header = (packages_header_header);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/layout/layout.vue
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var layout = ({
  name: 'GayLayout',
  props: { title: String }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-397a97f4","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/layout/layout.vue
var layout_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gay-layout"},[_vm._t("top",[_c('gay-header',{attrs:{"title":_vm.title}})]),_vm._v(" "),_c('section',{staticClass:"gay-container"},[_vm._t("default")],2),_vm._v(" "),_vm._t("bottom")],2)}
var layout_staticRenderFns = []
var layout_esExports = { render: layout_render, staticRenderFns: layout_staticRenderFns }
/* harmony default export */ var layout_layout = (layout_esExports);
// CONCATENATED MODULE: ./packages/layout/layout.vue
function layout_injectStyle (ssrContext) {
  __webpack_require__("jXUd")
}
var layout_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var layout___vue_template_functional__ = false
/* styles */
var layout___vue_styles__ = layout_injectStyle
/* scopeId */
var layout___vue_scopeId__ = "data-v-397a97f4"
/* moduleIdentifier (server only) */
var layout___vue_module_identifier__ = null
var layout_Component = layout_normalizeComponent(
  layout,
  layout_layout,
  layout___vue_template_functional__,
  layout___vue_styles__,
  layout___vue_scopeId__,
  layout___vue_module_identifier__
)

/* harmony default export */ var packages_layout_layout = (layout_Component.exports);

// CONCATENATED MODULE: ./packages/layout/index.js


packages_layout_layout.install = Vue => Vue.component(packages_layout_layout.name, packages_layout_layout);

/* harmony default export */ var packages_layout = (packages_layout_layout);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/tabbar/tabbar.vue
//
//
//
//
//
//

/* harmony default export */ var tabbar = ({
  name: 'GayTabbar',
  props: { type: String, value: [Number, String] },
  data: function data() {
    return {
      items: [],
      activeIndex: this.value
    };
  },

  watch: {
    value: function value(val) {
      this.activeIndex = val;
    },
    activeIndex: function activeIndex(index) {
      this.$emit('input', index);
    }
  },
  computed: {
    styleClass: function styleClass() {
      var type = this.type;

      return {
        'gay-tabbar--primary': type === 'primary',
        'gay-tabbar--success': type === 'success',
        'gay-tabbar--warning': type === 'warning',
        'gay-tabbar--danger': type === 'danger'
      };
    }
  },
  methods: {
    getChildActive: function getChildActive(childIndex) {
      return this.activeIndex === childIndex;
    },
    activeChild: function activeChild(childIndex) {
      this.activeIndex = childIndex;
    },
    registerChild: function registerChild(childIndex) {
      this.items.push(childIndex);
    },
    destroyChild: function destroyChild(childIndex) {
      var index = this.items.indexOf(childIndex);
      this.items.splice(index, 1);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-52e3b8ca","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/tabbar/tabbar.vue
var tabbar_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"gay-tabbar"},[_vm._t("default")],2)}
var tabbar_staticRenderFns = []
var tabbar_esExports = { render: tabbar_render, staticRenderFns: tabbar_staticRenderFns }
/* harmony default export */ var tabbar_tabbar = (tabbar_esExports);
// CONCATENATED MODULE: ./packages/tabbar/tabbar.vue
var tabbar_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var tabbar___vue_template_functional__ = false
/* styles */
var tabbar___vue_styles__ = null
/* scopeId */
var tabbar___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tabbar___vue_module_identifier__ = null
var tabbar_Component = tabbar_normalizeComponent(
  tabbar,
  tabbar_tabbar,
  tabbar___vue_template_functional__,
  tabbar___vue_styles__,
  tabbar___vue_scopeId__,
  tabbar___vue_module_identifier__
)

/* harmony default export */ var packages_tabbar_tabbar = (tabbar_Component.exports);

// CONCATENATED MODULE: ./packages/tabbar/index.js


packages_tabbar_tabbar.install = Vue => Vue.component(packages_tabbar_tabbar.name, packages_tabbar_tabbar);

/* harmony default export */ var packages_tabbar = (packages_tabbar_tabbar);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("a3Yh");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/badge/badge.vue
//
//
//
//
//
//
//

/* harmony default export */ var badge = ({
  name: 'GayBadge',
  props: {
    type: String,
    size: String,
    square: Boolean // 方角，默认圆角
  },
  computed: {
    styleClass: function styleClass() {
      var type = this.type,
          size = this.size,
          square = this.square;

      return {
        'gay-badge--square': square,
        'gay-badge--primary': type === 'primary',
        'gay-badge--success': type === 'success',
        'gay-badge--warning': type === 'warning',
        'gay-badge--danger': type === 'danger',
        'gay-badge--small': size === 'small',
        'gay-badge--large': size === 'large'
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-5ca9b53c","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/badge/badge.vue
var badge_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"gay-badge",class:_vm.styleClass},[_vm._t("default",[_vm._v("0")])],2)}
var badge_staticRenderFns = []
var badge_esExports = { render: badge_render, staticRenderFns: badge_staticRenderFns }
/* harmony default export */ var badge_badge = (badge_esExports);
// CONCATENATED MODULE: ./packages/badge/badge.vue
var badge_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var badge___vue_template_functional__ = false
/* styles */
var badge___vue_styles__ = null
/* scopeId */
var badge___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var badge___vue_module_identifier__ = null
var badge_Component = badge_normalizeComponent(
  badge,
  badge_badge,
  badge___vue_template_functional__,
  badge___vue_styles__,
  badge___vue_scopeId__,
  badge___vue_module_identifier__
)

/* harmony default export */ var packages_badge_badge = (badge_Component.exports);

// CONCATENATED MODULE: ./packages/badge/index.js


packages_badge_badge.install = Vue => Vue.component(packages_badge_badge.name, packages_badge_badge);

/* harmony default export */ var packages_badge = (packages_badge_badge);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/tabbar/tabbar-item.vue

//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tabbar_item = ({
  components: { GayBadge: packages_badge },
  name: 'GayTabbarItem',
  props: {
    dot: Boolean, // 圆点
    icon: String, // 图标类
    active: Boolean, // 是否激活状态
    activeClass: { // 激活时的css类名
      type: String,
      default: 'active' // 默认active
    },
    index: { // 索引值
      type: [String, Number],
      require: true
    }
  },
  computed: {
    styleClass: function styleClass() {
      var active = this.active,
          index = this.index,
          activeClass = this.activeClass;

      var parentActive = false;
      if (this.$parent.getChildActive) parentActive = this.$parent.getChildActive(index);
      return defineProperty_default()({}, activeClass, active || parentActive);
    }
  },
  methods: {
    clickHandler: function clickHandler(ev) {
      this.$emit('click', ev);
      if (this.$parent.activeChild) this.$parent.activeChild(this.index);
    }
  },
  created: function created() {
    // 注册
    if (this.$parent.registerChild) this.$parent.registerChild(this.index);
  },
  beforeDestroy: function beforeDestroy() {
    // 销毁
    if (this.$parent.destroyChild) this.$parent.destroyChild(this.index);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-5a96141a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/tabbar/tabbar-item.vue
var tabbar_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"gay-tabbar-item",class:_vm.styleClass,on:{"click":_vm.clickHandler}},[_vm._t("icon",[_c('i',{staticClass:"gay-icon",class:_vm.icon})]),_vm._v(" "),_vm._t("default")],2)}
var tabbar_item_staticRenderFns = []
var tabbar_item_esExports = { render: tabbar_item_render, staticRenderFns: tabbar_item_staticRenderFns }
/* harmony default export */ var tabbar_tabbar_item = (tabbar_item_esExports);
// CONCATENATED MODULE: ./packages/tabbar/tabbar-item.vue
var tabbar_item_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var tabbar_item___vue_template_functional__ = false
/* styles */
var tabbar_item___vue_styles__ = null
/* scopeId */
var tabbar_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tabbar_item___vue_module_identifier__ = null
var tabbar_item_Component = tabbar_item_normalizeComponent(
  tabbar_item,
  tabbar_tabbar_item,
  tabbar_item___vue_template_functional__,
  tabbar_item___vue_styles__,
  tabbar_item___vue_scopeId__,
  tabbar_item___vue_module_identifier__
)

/* harmony default export */ var packages_tabbar_tabbar_item = (tabbar_item_Component.exports);

// CONCATENATED MODULE: ./packages/tabbar-item/index.js


packages_tabbar_tabbar_item.install = Vue => Vue.component(packages_tabbar_tabbar_item.name, packages_tabbar_tabbar_item);

/* harmony default export */ var packages_tabbar_item = (packages_tabbar_tabbar_item);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/regenerator/index.js
var regenerator = __webpack_require__("lC5x");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("J0Oq");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/_better-scroll@1.5.2@better-scroll/dist/bscroll.esm.js
var bscroll_esm = __webpack_require__("cvoT");

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/better-scroll/better-scroll.vue
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var better_scroll = ({
  name: 'BetterScroll',
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否开启纵向滚动
     */
    scrollY: {
      type: Boolean,
      default: true
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullUp: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pullDown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  mounted: function mounted() {
    var _this = this;

    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(function () {
      _this._initScroll();
    }, 20);
  },

  methods: {
    _initScroll: function _initScroll() {
      var _this2 = this;

      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll的初始化
      this.scroll = new bscroll_esm["a" /* default */](this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        scrollY: this.scrollY
      });

      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on('scroll', function (pos) {
          _this2.$emit('scroll', pos);
        });
      }

      // 是否派发滚动到底部事件，用于上拉加载
      this.scroll.on('scrollEnd', function () {
        // 滚动到底部
        _this2.$emit('scrollEnd');
        if (_this2.pullup && _this2.scroll.y <= _this2.scroll.maxScrollY + 50) {
          _this2.$emit('scrollToEnd');
        }
      });

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on('touchend', function (pos) {
          // 下拉动作
          if (pos.y > 50) {
            _this2.$emit('pulldown');
          }
        });
      }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', function () {
          _this2.$emit('beforeScroll');
        });
      }
    },
    disable: function disable() {
      // 代理better-scroll的disable方法
      if (this.scroll) this.scroll.disable();
    },
    enable: function enable() {
      // 代理better-scroll的enable方法
      if (this.scroll) this.scroll.enable();
    },
    refresh: function refresh() {
      // 代理better-scroll的refresh方法
      if (this.scroll) this.scroll.refresh();
    },
    scrollTo: function scrollTo(x, y, time, easing) {
      // 代理better-scroll的scrollTo方法
      if (this.scroll) this.scroll.scrollTo(x, y, time, easing);
    },
    scrollToElement: function scrollToElement(el, time, offsetX, offsetY, easing) {
      // 代理better-scroll的scrollToElement方法
      if (this.scroll) this.scroll.scrollToElement(el, time, offsetX, offsetY, easing);
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data: function data() {
      setTimeout(this.refresh, this.refreshDelay);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-bbbecc58","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/better-scroll/better-scroll.vue
var better_scroll_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"wrapper"},[_vm._t("default")],2)}
var better_scroll_staticRenderFns = []
var better_scroll_esExports = { render: better_scroll_render, staticRenderFns: better_scroll_staticRenderFns }
/* harmony default export */ var better_scroll_better_scroll = (better_scroll_esExports);
// CONCATENATED MODULE: ./packages/better-scroll/better-scroll.vue
function better_scroll_injectStyle (ssrContext) {
  __webpack_require__("ZmQO")
  __webpack_require__("5Pyl")
}
var better_scroll_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var better_scroll___vue_template_functional__ = false
/* styles */
var better_scroll___vue_styles__ = better_scroll_injectStyle
/* scopeId */
var better_scroll___vue_scopeId__ = "data-v-bbbecc58"
/* moduleIdentifier (server only) */
var better_scroll___vue_module_identifier__ = null
var better_scroll_Component = better_scroll_normalizeComponent(
  better_scroll,
  better_scroll_better_scroll,
  better_scroll___vue_template_functional__,
  better_scroll___vue_styles__,
  better_scroll___vue_scopeId__,
  better_scroll___vue_module_identifier__
)

/* harmony default export */ var packages_better_scroll_better_scroll = (better_scroll_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/tabs/tabs.vue





/* harmony default export */ var tabs_tabs = ({
  components: { BetterScroll: packages_better_scroll_better_scroll },
  name: 'GayTabs',
  render: function render(h) {
    var _this = this;

    var navItems = this.tabs.map(function (tab) {
      return h(
        'a',
        { 'class': ['gay-tabs-nav-item', _this.currentIndex === tab.index ? 'active' : null],
          on: {
            'click': function click(ev) {
              return _this.clickHandler(tab.index);
            }
          },
          directives: [{
            name: 'ripple',
            value: true
          }]
        },
        [tab.currentTitle]
      );
    });

    var nav = h(
      'better-scroll',
      { ref: 'scroll',
        style: 'width:100%;',
        attrs: { scrollX: true,
          tap: 'touchend',
          data: this.tabs }
      },
      [h(
        'div',
        { 'class': 'gay-tabs-nav',
          style: this.navStyle },
        [navItems, h(
          'div',
          { 'class': 'gay-tabs-bar', style: this.barStyle },
          [' ']
        )]
      )]
    );
    var content = h(
      'div',
      { 'class': 'gay-tabs-content' },
      [this.$slots.default]
    );

    return h(
      'div',
      { 'class': 'gay-tabs' },
      [[nav, content]]
    );
  },

  props: {
    value: [Number, String]
  },
  computed: {
    navStyle: function navStyle() {
      return {
        width: this.scrollWidth + 'px'
      };
    },
    barStyle: function barStyle() {
      return {
        width: this.barWidth + 'px',
        transform: 'translate(' + this.barLeft + 'px,0)'
      };
    }
  },
  data: function data() {
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
    value: function value(index) {
      this.currentIndex = index;
    },
    currentIndex: function currentIndex(index) {
      var _this2 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.$emit('input', index);
                _context.next = 3;
                return _this2.$nextTick();

              case 3:
                _this2.autoScroll();

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    tabs: function tabs() {
      var _this3 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee2() {
        var tabs, width;
        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.$nextTick();

              case 2:
                tabs = _this3.$el.querySelectorAll('.gay-tabs-nav-item');
                width = 0;

                tabs.forEach(function (t) {
                  width += +t.offsetWidth;
                });
                _this3.scrollWidth = width;

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    }
  },
  methods: {
    autoScroll: function autoScroll() {
      var _this4 = this;

      return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee3() {
        var currentTab;
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                currentTab = _this4.$el.querySelector('.gay-tabs-nav-item.active');

                _this4.barLeft = currentTab.offsetLeft;
                _this4.barWidth = currentTab.offsetWidth;
                _this4.$refs.scroll.scrollToElement(currentTab, 500, true);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4);
      }))();
    },
    clickHandler: function clickHandler(index) {
      this.$emit('tabClick', index);
      this.currentIndex = index;
    },
    registerChild: function registerChild(child) {
      var index = child.index,
          title = child.title,
          $slots = child.$slots,
          $el = child.$el;

      var currentTitle = $slots.title || title;
      this.tabs.push({ index: index, currentTitle: currentTitle, $el: $el });
    },
    destroyChild: function destroyChild(child) {
      var index = child.index;

      var childIndex = this.tabs.findIndex(function (tab) {
        return '' + tab.index === '' + index;
      });
      if (childIndex < 0) return;
      this.tabs.splice(childIndex, 1);
    }
  },
  mounted: function mounted() {
    var _this5 = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee4() {
      return regenerator_default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _this5.$nextTick();

            case 2:
              _this5.autoScroll();

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this5);
    }))();
  }
});
// CONCATENATED MODULE: ./packages/tabs/tabs.vue
var tabs_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var tabs___vue_template_functional__ = false
/* styles */
var tabs___vue_styles__ = null
/* scopeId */
var tabs___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tabs___vue_module_identifier__ = null
var tabs_Component = tabs_normalizeComponent(
  tabs_tabs,
  __vue_template__,
  tabs___vue_template_functional__,
  tabs___vue_styles__,
  tabs___vue_scopeId__,
  tabs___vue_module_identifier__
)

/* harmony default export */ var packages_tabs_tabs = (tabs_Component.exports);

// CONCATENATED MODULE: ./packages/tabs/index.js


packages_tabs_tabs.install = Vue => Vue.component(packages_tabs_tabs.name, packages_tabs_tabs);

/* harmony default export */ var packages_tabs = (packages_tabs_tabs);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/tabs/tab-item.vue
//
//
//
//
//
//
//

/* harmony default export */ var tab_item = ({
  name: 'GayTabItem',
  props: {
    index: {
      type: [String, Number],
      require: true
    },
    title: [String, Number]
  },
  computed: {
    show: function show() {
      return this.$parent.currentIndex === this.index;
    }
  },
  mounted: function mounted() {
    var registerChild = this.$parent.registerChild;
    if (registerChild) registerChild(this);
  },
  beforeDestroy: function beforeDestroy() {
    var destroyChild = this.$parent.destroyChild;
    if (destroyChild) destroyChild(this);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-21700952","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/tabs/tab-item.vue
var tab_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"gay-tabs-content-item"},[_vm._t("default")],2)}
var tab_item_staticRenderFns = []
var tab_item_esExports = { render: tab_item_render, staticRenderFns: tab_item_staticRenderFns }
/* harmony default export */ var tabs_tab_item = (tab_item_esExports);
// CONCATENATED MODULE: ./packages/tabs/tab-item.vue
var tab_item_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var tab_item___vue_template_functional__ = false
/* styles */
var tab_item___vue_styles__ = null
/* scopeId */
var tab_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var tab_item___vue_module_identifier__ = null
var tab_item_Component = tab_item_normalizeComponent(
  tab_item,
  tabs_tab_item,
  tab_item___vue_template_functional__,
  tab_item___vue_styles__,
  tab_item___vue_scopeId__,
  tab_item___vue_module_identifier__
)

/* harmony default export */ var packages_tabs_tab_item = (tab_item_Component.exports);

// CONCATENATED MODULE: ./packages/tab-item/index.js


packages_tabs_tab_item.install = Vue => Vue.component(packages_tabs_tab_item.name, packages_tabs_tab_item);

/* harmony default export */ var packages_tab_item = (packages_tabs_tab_item);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/cell-item/cell-group.vue
//
//
//
//
//
//

/* harmony default export */ var cell_group = ({
  name: 'GayCellGroup'
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-6d28fef9","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/cell-item/cell-group.vue
var cell_group_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gay-cell-group"},[_vm._t("default")],2)}
var cell_group_staticRenderFns = []
var cell_group_esExports = { render: cell_group_render, staticRenderFns: cell_group_staticRenderFns }
/* harmony default export */ var cell_item_cell_group = (cell_group_esExports);
// CONCATENATED MODULE: ./packages/cell-item/cell-group.vue
function cell_group_injectStyle (ssrContext) {
  __webpack_require__("nWdU")
}
var cell_group_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var cell_group___vue_template_functional__ = false
/* styles */
var cell_group___vue_styles__ = cell_group_injectStyle
/* scopeId */
var cell_group___vue_scopeId__ = "data-v-6d28fef9"
/* moduleIdentifier (server only) */
var cell_group___vue_module_identifier__ = null
var cell_group_Component = cell_group_normalizeComponent(
  cell_group,
  cell_item_cell_group,
  cell_group___vue_template_functional__,
  cell_group___vue_styles__,
  cell_group___vue_scopeId__,
  cell_group___vue_module_identifier__
)

/* harmony default export */ var packages_cell_item_cell_group = (cell_group_Component.exports);

// CONCATENATED MODULE: ./packages/cell-group/index.js


packages_cell_item_cell_group.install = Vue => Vue.component(packages_cell_item_cell_group.name, packages_cell_item_cell_group);

/* harmony default export */ var packages_cell_group = (packages_cell_item_cell_group);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/cell-item/cell-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cell_item = ({
  name: 'GayCellItem',
  props: {
    label: String,
    arrow: Boolean,
    link: [String, Object],
    route: Boolean
  },
  methods: {
    clickHandler: function clickHandler() {
      if (!this.link) {
        return;
      }
      if (this.route && this.$router) {
        this.$router.push(this.link);
        return;
      }
      location.href = this.link;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-481f596c","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/cell-item/cell-item.vue
var cell_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"gay-cell-item",on:{"click":_vm.clickHandler}},[_c('div',{staticClass:"gay-cell-item__label"},[_vm._t("label",[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")])],2),_vm._v(" "),_c('div',{staticClass:"gay-cell-item__content"},[_vm._t("default"),_vm._v(" "),(_vm.arrow)?_c('i',{staticClass:"iconfont icon-right"}):_vm._e()],2)])}
var cell_item_staticRenderFns = []
var cell_item_esExports = { render: cell_item_render, staticRenderFns: cell_item_staticRenderFns }
/* harmony default export */ var cell_item_cell_item = (cell_item_esExports);
// CONCATENATED MODULE: ./packages/cell-item/cell-item.vue
function cell_item_injectStyle (ssrContext) {
  __webpack_require__("twl7")
}
var cell_item_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var cell_item___vue_template_functional__ = false
/* styles */
var cell_item___vue_styles__ = cell_item_injectStyle
/* scopeId */
var cell_item___vue_scopeId__ = "data-v-481f596c"
/* moduleIdentifier (server only) */
var cell_item___vue_module_identifier__ = null
var cell_item_Component = cell_item_normalizeComponent(
  cell_item,
  cell_item_cell_item,
  cell_item___vue_template_functional__,
  cell_item___vue_styles__,
  cell_item___vue_scopeId__,
  cell_item___vue_module_identifier__
)

/* harmony default export */ var packages_cell_item_cell_item = (cell_item_Component.exports);

// CONCATENATED MODULE: ./packages/cell-item/index.js


packages_cell_item_cell_item.install = Vue => Vue.component(packages_cell_item_cell_item.name, packages_cell_item_cell_item);

/* harmony default export */ var packages_cell_item = (packages_cell_item_cell_item);

// EXTERNAL MODULE: ./node_modules/_babel-runtime@6.26.0@babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("IHPB");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/swipe/swipe.vue



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var swipe_swipe = ({
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
  data: function data() {
    return {
      currentIndex: 1,
      dots: []
    };
  },

  methods: {
    initStyle: function initStyle() {
      var container = this.$refs.container;
      var swipe = this.$refs.swipe;
      var width = swipe.clientWidth;
      // init children
      this.children = [].concat(toConsumableArray_default()(container.children));
      // set child width
      this.children.forEach(function (child) {
        child.style.width = width + 'px';
      });
      // set container width
      container.style.width = this.children.length + (this.loop ? 2 : 0) + '00%';
      // set dots
      this.dots = this.children.length;
    },
    initScroll: function initScroll() {
      var _this = this;

      this.swipe = new bscroll_esm["a" /* default */](this.$refs.swipe, {
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

      var swipe = this.swipe;

      swipe.on('scrollEnd', function () {
        var _swipe$getCurrentPage = swipe.getCurrentPage(),
            pageX = _swipe$getCurrentPage.pageX;

        _this.currentIndex = pageX;
        _this.$emit('change', pageX);
        _this.play();
      });

      swipe.on('flick', function () {
        clearTimeout(_this.timer);
      });
    },
    play: function play() {
      var _this2 = this;

      this.timer = setTimeout(function () {
        _this2.next();
      }, this.interval);
    },
    next: function next() {
      console.log('next');
      clearTimeout(this.timer);
      this.swipe.next();
    },
    prev: function prev() {
      console.log('prev');
      clearTimeout(this.timer);
      this.swipe.prev();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this3.$nextTick();

            case 2:
              _this3.initStyle();
              _this3.initScroll();
              _this3.play();

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this3);
    }))();
  },
  beforeDestroy: function beforeDestroy() {
    this.swipe.disable();
    clearTimeout(this.timer);
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-79579d30","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/swipe/swipe.vue
var swipe_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gay-swipe"},[_c('div',{ref:"swipe",staticClass:"gay-swipe-scroll"},[_c('div',{ref:"container",staticClass:"gay-swipe-container"},[_vm._t("default")],2)]),_vm._v(" "),(_vm.showDots)?_c('div',{staticClass:"gay-swipe-dots"},_vm._l((_vm.dots),function(item){return _c('span',{class:{active: _vm.currentIndex === item}})})):_vm._e(),_vm._v(" "),_c('a',{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"gay-swipe-prev",on:{"click":_vm.prev}},[_c('i',{staticClass:"iconfont icon-back"})]),_vm._v(" "),_c('a',{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"gay-swipe-next",on:{"click":_vm.next}},[_c('i',{staticClass:"iconfont icon-right"})])])}
var swipe_staticRenderFns = []
var swipe_esExports = { render: swipe_render, staticRenderFns: swipe_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_packages_swipe_swipe = (swipe_esExports);
// CONCATENATED MODULE: ./packages/swipe/swipe.vue
var swipe_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var swipe___vue_template_functional__ = false
/* styles */
var swipe___vue_styles__ = null
/* scopeId */
var swipe___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var swipe___vue_module_identifier__ = null
var swipe_Component = swipe_normalizeComponent(
  swipe_swipe,
  selectortype_template_index_0_packages_swipe_swipe,
  swipe___vue_template_functional__,
  swipe___vue_styles__,
  swipe___vue_scopeId__,
  swipe___vue_module_identifier__
)

/* harmony default export */ var packages_swipe_swipe = (swipe_Component.exports);

// CONCATENATED MODULE: ./packages/swipe/index.js


packages_swipe_swipe.install = Vue => Vue.component(packages_swipe_swipe.name, packages_swipe_swipe);

/* harmony default export */ var packages_swipe = (packages_swipe_swipe);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.2@babel-loader/lib!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=script&index=0!./packages/swipe/swipe-item.vue
//
//
//
//
//
//

/* harmony default export */ var swipe_item = ({
  name: 'GaySwipeItem'
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.5.0@vue-loader/lib/template-compiler?{"id":"data-v-64ea325a","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.5.0@vue-loader/lib/selector.js?type=template&index=0!./packages/swipe/swipe-item.vue
var swipe_item_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gay-swipe-item"},[_vm._t("default")],2)}
var swipe_item_staticRenderFns = []
var swipe_item_esExports = { render: swipe_item_render, staticRenderFns: swipe_item_staticRenderFns }
/* harmony default export */ var swipe_swipe_item = (swipe_item_esExports);
// CONCATENATED MODULE: ./packages/swipe/swipe-item.vue
var swipe_item_normalizeComponent = __webpack_require__("/Xao")
/* script */

/* template */

/* template functional */
var swipe_item___vue_template_functional__ = false
/* styles */
var swipe_item___vue_styles__ = null
/* scopeId */
var swipe_item___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var swipe_item___vue_module_identifier__ = null
var swipe_item_Component = swipe_item_normalizeComponent(
  swipe_item,
  swipe_swipe_item,
  swipe_item___vue_template_functional__,
  swipe_item___vue_styles__,
  swipe_item___vue_scopeId__,
  swipe_item___vue_module_identifier__
)

/* harmony default export */ var packages_swipe_swipe_item = (swipe_item_Component.exports);

// CONCATENATED MODULE: ./packages/swipe-item/index.js


packages_swipe_swipe_item.install = Vue => Vue.component(packages_swipe_swipe_item.name, packages_swipe_swipe_item);

/* harmony default export */ var packages_swipe_item = (packages_swipe_swipe_item);

// CONCATENATED MODULE: ./packages/better-scroll/index.js


packages_better_scroll_better_scroll.install = Vue => Vue.component(packages_better_scroll_better_scroll.name, packages_better_scroll_better_scroll);

/* harmony default export */ var packages_better_scroll = (packages_better_scroll_better_scroll);

// CONCATENATED MODULE: ./src/directives/ripple.js
var DEFAULT_OPTION = {
  class: '', // Animation container className
  center: false, // Position of animation
  duration: 500, // Duration of animation  (unit: ms)
  color: '', // Background color of Animation
  radius: '' // Radius of Animation ( default: the longer between width and height )
};

function style($el, value) {
  var el = $el;
  ['transform', 'webkitTransform'].forEach(function (i) {
    el.style[i] = value;
  });
}

function show(e, $el, binding) {
  var el = $el;
  var container = document.createElement('span');
  var animation = document.createElement('span');

  container.appendChild(animation);
  container.className = 'ripple__container';

  // Add the animation container className
  if (binding.class) {
    container.className += ' ' + binding.class;
  }
  // Set the radius of animation
  var size = binding.radius || (el.clientWidth > el.clientHeight ? el.clientWidth : el.clientHeight);
  animation.className = 'ripple__animation';
  var radius = size * (binding.center ? 1 : 2) + 'px';
  animation.style.width = radius;
  animation.style.height = radius;
  // Set the duration of animation
  animation.style.transitionDuration = (binding.duration || 500) + 'ms';
  // Set the background color of animation
  animation.style.background = binding.color || 'currentColor';

  el.appendChild(container);
  var computed = window.getComputedStyle(el);
  if (computed.position !== 'absolute' && computed.position !== 'fixed') el.style.position = 'relative';

  var offset = el.getBoundingClientRect();
  var x = binding.center ? '50%' : e.clientX - offset.left + 'px';
  var y = binding.center ? '50%' : e.clientY - offset.top + 'px';

  animation.classList.add('ripple__animation--enter');
  animation.classList.add('ripple__animation--visible');

  // Set the position of animation
  animation.style.left = x;
  animation.style.top = y;

  style(animation, 'translate(-50%, -50%) scale3d(0.01,0.01,0.01)', binding);
  // save the event timestamp
  animation.dataset.activated = Date.now();

  setTimeout(function () {
    animation.classList.remove('ripple__animation--enter');
    style(animation, 'translate(-50%, -50%) scale3d(0.99,0.99,0.99)', binding);
  }, 0);
}

function hide($el, binding) {
  var el = $el;
  var ripples = el.getElementsByClassName('ripple__animation');

  if (ripples.length === 0) return;
  var animation = ripples[ripples.length - 1];
  var diff = Date.now() - Number(animation.dataset.activated);
  var delay = binding.duration - diff;
  delay = delay < 0 ? 0 : delay;

  setTimeout(function () {
    animation.classList.remove('ripple__animation--visible');

    setTimeout(function () {
      // Need to figure out a new way to do this
      try {
        // reset the position of element
        if (ripples.length < 1) el.style.position = null;
        // remove the container
        if (animation.parentNode) el.removeChild(animation.parentNode);
      } catch (e) {
        // do nothing
      }
    }, 300);
  }, delay);
}

function bind(el, _ref) {
  var _ref$value = _ref.value,
      value = _ref$value === undefined ? DEFAULT_OPTION : _ref$value;

  el.addEventListener('mousedown', function (e) {
    return show(e, el, value);
  }, false);

  ['tap', 'touchend', 'touchcancel', 'mouseup', 'mouseleave', 'dragstart'].forEach(function (en) {
    return el.addEventListener(en, function () {
      return hide(el, value);
    }, false);
  });
}

function unbind(el, _ref2) {
  var _ref2$value = _ref2.value,
      value = _ref2$value === undefined ? DEFAULT_OPTION : _ref2$value;

  // remove show event handler
  el.removeEventListener('touchstart', function (e) {
    return show(e, el, value);
  }, false);
  el.removeEventListener('mousedown', function (e) {
    return show(e, el, value);
  }, false);
  // remove hide event handler
  ['tap', 'touchend', 'touchcancel', 'mouseup', 'mouseleave', 'dragstart'].forEach(function (en) {
    return el.removeEventListener(en, function () {
      return hide(el, value);
    }, false);
  });
}

function install(vue) {
  vue.directive(this.name, this);
}

/* harmony default export */ var ripple = ({
  name: 'ripple',
  bind: bind,
  unbind: unbind,
  install: install
});
// CONCATENATED MODULE: ./src/index.js














// directive


var version = '0.0.1';

var components = [packages_better_scroll, packages_button, packages_header, packages_tabbar, packages_tabbar_item, packages_layout, packages_tabs, packages_tab_item, packages_badge, packages_cell_group, packages_cell_item, packages_swipe, packages_swipe_item];

function src_install(Vue) {
  // components
  components.forEach(function (comp) {
    return Vue.component(comp.name, comp);
  });
  // directive
  Vue.directive(ripple.name, ripple);
}

/* harmony default export */ var src = ({
  version: version,
  install: src_install
});
// CONCATENATED MODULE: ./demo/main.js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





vue_esm["a" /* default */].config.productionTip = false;
vue_esm["a" /* default */].use(src);

/* eslint-disable no-new */
new vue_esm["a" /* default */]({
  el: '#app',
  router: router,
  // template: '<App/>',
  // components: { App }
  render: h => h(demo_App)
});


/***/ }),

/***/ "jXUd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "nWdU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "twl7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},["iXgl"]);