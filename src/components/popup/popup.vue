<template>
  <div class="gay-popup">
    <transition name="fade">
      <div class="gay-popup--mask"
           @click="maskClick"
           v-show="visible"
           v-if="mask">
        <slot name="mask"></slot>
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="gay-popup--container"
           v-show="visible"
           :class="posClass">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  /**
   * @params {Boolean} visible 显示关闭弹出层
   * @params {Boolean} mask 是否显示遮罩层
   * @params {String} position popup显示位置 省略居中 top/left/right/bottom
   * @event mask-click 点击遮罩层触发
   */

  export default {
    name: 'GayPopup',
    props: {
      mask: {
        type: Boolean,
        default: true
      },
      position: {
        type: String
      },
      visible: {
        type: Boolean
      }
    },
    watch: {
      visible(val) {
        this.$emit(val ? 'show' : 'hide');
      }
    },
    computed: {
      posClass() {
        const position = this.position;
        return {
          'gay-popup--top': position === 'top',
          'gay-popup--left': position === 'left',
          'gay-popup--right': position === 'right',
          'gay-popup--bottom': position === 'bottom',
          'gay-popup--center': ['top', 'left', 'right', 'bottom'].indexOf(position) < 0
        }
          ;
      },
      transitionName() {
        const position = this.position;
        if (position) return `slide-from-${position}`;
        return '';
      }
    },
    methods: {
      maskClick(e) {
        this.$emit('mask-click', e);
      },
      open() {
        this.$emit('update:visible', true);
      },
      close() {
        this.$emit('update:visible', false);
      }
    }
  };
</script>

<style scoped>

</style>
