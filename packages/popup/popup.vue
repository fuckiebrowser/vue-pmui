<template>
  <div class="gay-popup">
    <transition name="fade">
      <div class="gay-popup__mask"
           @click="maskClick"
           v-show="visible"
           v-if="mask">
        <slot name="mask"></slot>
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="gay-popup__container"
           v-show="visible"
           :class="posClass">
        <div class="gay-popup__content">
          <slot></slot>
        </div>
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
        return {
          'gay-popup__top': this.position === 'top',
          'gay-popup__left': this.position === 'left',
          'gay-popup__right': this.position === 'right',
          'gay-popup__bottom': this.position === 'bottom'
        };
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
