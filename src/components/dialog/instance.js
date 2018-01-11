import Vue from 'vue';
import dialog from './dialog';

const body = document.body;
const defaults = {
  title: '提示', // 提示框标题
  content: '', // 提示框内容，如果是一个function则相当于render函数
  showClose: false, // 是否显示右上角关闭按钮
  showMask: true, // 是否显示遮罩层
  closeOnClickMask: true, // 是否点击遮罩层
  closeOnConfirm: true, // 是否确认时关闭对话框
  showConfirmButton: true, // 是否显示确认按钮
  confirmButtonText: '确定', // 确认按钮文本
  showCancelButton: false, // 是否显示取消按钮
  cancelButtonText: '取消', // 取消按钮文本
  showInput: false, // 是否显示输入框
  inputType: 'text', // 输入框类型
  inputPlaceholder: '' // 输入框占位符
};

const pool = [];

function close() {
  if (this.visible) {
    this.hide();
    return;
  }
  pool.splice(pool.indexOf(this), 1);
  body.removeChild(this.$el);
  this.$destroy();
}

function createDom() {
  const dom = document.createElement('div');
  body.appendChild(dom);
  return dom;
}

function Dialog(options) {
  let props = {};
  if (typeof options === 'string') {
    props = { content: options };
  } else {
    props = options;
  }

  const instance = new Vue({
    el: createDom(),
    render(h) {
      return h(dialog, {
        ref: 'dialog',
        props: { ...defaults, ...props },
        on: {
          close: () => instance.close(),
          cancel: () => {
            instance.$emit('cancel');
            if (props.cancel) props.cancel();
          },
          confirm: (val) => {
            instance.$emit('confirm', val);
            if (props.confirm) props.confirm(val);
          }
        }
      });
    },
    mounted() {
      this.$refs.dialog.show();
    }
  });
  instance.close = close;
  // const instance = new DialogConstructor({
  //   el: createDom(),
  //   mounted() {
  //     this.show();
  //   }
  // });
  // Object.assign(instance, defaults, props);
  pool.push(instance);
  // if (instance.cancel) instance.$on('cancel', instance.cancel);
  // if (instance.confirm) instance.$on('confirm', instance.confirm);

  return instance;
}

Dialog.alert = (title, content) => {
  const props = content ? { title, content } : { content: title };
  return Dialog(props);
};
Dialog.confirm = (title, content) => {
  const promptProps = {
    showCancelButton: true
  };
  const props = content ? { title, content } : { content: title };
  return new Promise((resolve, reject) => {
    const instance = Dialog(Object.assign(promptProps, props));
    instance.$once('confirm', resolve);
    instance.$once('cancel', reject);
  });
};
Dialog.prompt = (title, content) => {
  const promptProps = {
    showInput: true,
    showCancelButton: true
  };
  const props = content ? { title, content } : { content: title };
  return new Promise((resolve, reject) => {
    const instance = Dialog(Object.assign(promptProps, props));
    instance.$once('confirm', resolve);
    instance.$once('cancel', reject);
  });
};
export default Dialog;
