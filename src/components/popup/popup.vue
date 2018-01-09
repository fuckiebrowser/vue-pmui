<template>
  <div class="pm-popup">
    <transition name="fade">
      <div class="pm-popup--mask"
           @click="maskClick"
           v-show="visible"
           v-if="mask">
        <slot name="mask" />
      </div>
    </transition>
    <transition :name="transitionName">
      <div class="pm-popup--container"
           v-show="visible"
           :class="posClass">
        <slot />
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
    name: 'PmPopup',
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
          'pm-popup--top': position === 'top',
          'pm-popup--left': position === 'left',
          'pm-popup--right': position === 'right',
          'pm-popup--bottom': position === 'bottom',
          'pm-popup--center': ['top', 'left', 'right', 'bottom'].indexOf(position) < 0
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
