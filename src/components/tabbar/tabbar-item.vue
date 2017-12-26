<template>
  <div class="pm-tabbar-item"
       :class="styleClass"
       @click="clickHandler"
       v-ripple>
    <slot name="icon">
      <i class="pm-icon" :class="icon"></i>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
  import PmBadge from '../badge';

  export default {
    components: { PmBadge },
    name: 'PmTabbarItem',
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
      styleClass() {
        const { active, index, activeClass } = this;
        let parentActive = false;
        if (this.$parent.getChildActive) parentActive = this.$parent.getChildActive(index);
        return { [activeClass]: active || parentActive };
      }
    },
    methods: {
      clickHandler(ev) {
        this.$emit('click', ev);
        if (this.$parent.activeChild) this.$parent.activeChild(this.index);
      }
    },
    created() {
      // 注册
      if (this.$parent.registerChild) this.$parent.registerChild(this.index);
    },
    beforeDestroy() {
      // 销毁
      if (this.$parent.destroyChild) this.$parent.destroyChild(this.index);
    }
  };
</script>
