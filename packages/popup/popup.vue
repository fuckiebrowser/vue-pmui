<template>
  <div class="gay-popup"
       v-show="visible">
    <div class="gay-popup__mask"
         @click="close"
         v-if="mask">
      <slot name="mask"></slot>
    </div>
    <div class="gay-popup__container"
         :class="posClass">
      <div class="gay-popup__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * @params {Boolean} mask 是否显示遮罩层
   * @params {String} position popup显示位置 省略居中 top/left/right/bottom
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
      }
    },
    data() {
      return {
        visible: false
      };
    },
    computed: {
      posClass() {
        return {
          'gay-popup__top': this.position === 'top',
          'gay-popup__left': this.position === 'left',
          'gay-popup__right': this.position === 'right',
          'gay-popup__bottom': this.position === 'bottom'
        };
      }
    },
    methods: {
      open() {
        this.visible = true;
      },
      close() {
        this.visible = false;
      }
    }
  };
</script>

<style scoped>

</style>
