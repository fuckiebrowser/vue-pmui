<template>
  <div class="gay-tabbar-item"
       :class="styleClass"
       @click="clickHandler"
       v-ripple>
    <slot name="icon">
      <i class="gay-icon" :class="icon"></i>
    </slot>
    <gay-badge v-if="badge">{{badge}}</gay-badge>
    <slot></slot>
  </div>
</template>

<script>
  import GayBadge from '../badge';

  const key = '_uid';
  export default {
    components: { GayBadge },
    name: 'GayTabbarItem',
    props: {
      badge: [Boolean, Number, String], // 角标值
      icon: String, // 图标类
      active: Boolean, // 是否激活状态
      activeClass: { // 激活时的css类名
        type: String,
        default: 'active' // 默认active
      }
    },
    computed: {
      styleClass() {
        const { active, activeClass } = this;
        let parentActive = false;
        if (this.$parent.getChildActive) parentActive = this.$parent.getChildActive(this[key]);
        return { [activeClass]: active || parentActive };
      }
    },
    methods: {
      clickHandler(ev) {
        this.$emit('click', ev);
        console.log(ev);
        if (this.$parent.activeChild) this.$parent.activeChild(this[key]);
      }
    },
    created() {
      // 注册
      if (this.$parent.registerChild) this.$parent.registerChild(this[key]);
    },
    beforeDestroy() {
      // 销毁
      if (this.$parent.destroyChild) this.$parent.destroyChild(this[key]);
    }
  };
</script>
