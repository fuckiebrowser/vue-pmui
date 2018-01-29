<template>
  <transition name="fade">
    <pm-popup class="pm-dialog"
              v-show="visible"
              @mask-click="closeOnClickMask && cancel">
      <transition name="zoom"
                  @after-leave="$emit('close')">
        <div class="pm-dialog__container"
             v-show="visible">
          <a class="pm-dialog__close"
             @click="cancel"
             v-if="showClose">
            <i class="pm-icon icon-close1"></i>
          </a>

          <div class="pm-dialog__header">
            <slot name="header">
              {{title}}
            </slot>
          </div>

          <div class="pm-dialog__content">
            <slot>{{content}}</slot>
            <input v-if="showInput"
                   placeholder=""
                   class="pm-dialog__input"
                   v-model="value"
                   :placeholder="inputPlaceholder"
                   :type="inputType">
          </div>

          <div class="pm-dialog--footer">
            <slot name="footer">
              <a class="pm-dialog__button"
                 v-if="showCancelButton"
                 @click="cancel">
                {{cancelButtonText}}
              </a>
              <a class="pm-dialog__button confirm"
                 v-if="showConfirmButton"
                 @click="confirm">
                {{confirmButtonText}}
              </a>
            </slot>
          </div>
        </div>
      </transition>
    </pm-popup>
  </transition>
</template>

<script type="text/jsx">
  import PmPopup from '../popup';
  import display from '../../mixins/display';

  /**
   * @param {String} title 对话框标题
   * @param {String||Function} content 对话框内容，如果是一个function则相当于render函数
   * @param {Boolean} showClose 是否显示右上角关闭按钮
   * @param {Boolean} showMask 是否显示遮罩层
   * @param {Boolean} closeOnClickMask 是否点击遮罩层关闭对话框
   * @param {Boolean} showConfirmButton 是否显示确认按钮
   * @param {Boolean} showCancelButton 是否显示取消按钮
   * @param {String} confirmButtonText 确认按钮文本
   * @param {Boolean} showInput 是否显示输入框
   * @param {String} inputType 输入框类型
   * @param {String||Number} inputValue 输入框默认值
   */
  export default {
    name: 'PmDialog',
    components: { PmPopup },
    mixins: [display],
    props: {
      title: {
        type: String,
        default: '提示'
      },
      content: {
        type: [String, Function],
        default: ''
      },
      showClose: {
        type: Boolean,
        default: false
      },
      showMask: {
        type: Boolean,
        default: false
      },
      closeOnClickMask: {
        type: Boolean,
        default: false
      },
      closeOnConfirm: {
        type: Boolean,
        default: true
      },
      showConfirmButton: {
        type: Boolean,
        default: true
      },
      showCancelButton: {
        type: Boolean,
        default: false
      },
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      },
      showInput: {
        type: Boolean,
        default: false
      },
      inputType: {
        type: String,
        default: 'text'
      },
      inputPlaceholder: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        value: this.inputValue
      };
    },
    methods: {
      confirm() {
        const inputValue = this.showInput ? this.value : null;
        this.$emit('confirm', inputValue);
        if (this.closeOnConfirm) this.hide();
      },
      cancel() {
        this.$emit('cancel');
        this.hide();
      }
    }
  };
</script>
