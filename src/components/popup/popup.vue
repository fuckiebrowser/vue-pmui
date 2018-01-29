<template>
  <div class="pm-popup"
       v-show="visible">
      <div class="pm-popup__mask"
           @click="maskClick"
           v-if="mask">
        <slot name="mask"/>
      </div>
    <div class="pm-popup__container"
         :class="posClass"
         v-if="$slots.default">
      <slot/>
    </div>
  </div>
</template>

<script>
  import display from '../../mixins/display';

  /**
   * @params {Boolean} visible 显示关闭弹出层
   * @params {Boolean} mask 是否显示遮罩层
   * @params {String} position popup显示位置 省略居中 top/left/right/bottom
   * @event mask-click 点击遮罩层触发
   */

  export default {
    name: 'PmPopup',
    mixins: [display],
    props: {
      mask: {
        type: Boolean,
        default: true
      },
      position: {
        type: String
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
        };
      }
      // transitionName() {
      //   const position = this.position;
      //   if (position) return `slide-from-${position}`;
      //   return '';
      // }
    },
    methods: {
      maskClick(e) {
        this.$emit('mask-click', e);
      }
    }
  };
</script>
