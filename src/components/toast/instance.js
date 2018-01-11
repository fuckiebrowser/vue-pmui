import Vue from 'vue';
import toast from './toast';

const ToastConstructor = Vue.extend(toast);

const body = document.body;
const defaults = {
  type: '',
  message: '',
  icon: '',
  mask: false,
  duration: 2000
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

function Toast(options) {
  let props = {};
  if (typeof options === 'string') {
    props = { message: options };
  } else {
    props = options;
  }

  const instance = new ToastConstructor({
    el: createDom(),
    async mounted() {
      this.show();
      await this.$nextTick();
      if (this.duration) {
        setTimeout(() => {
          this.hide();
        }, this.duration);
      }
    }
  });
  Object.assign(instance, defaults, props);
  instance.close = close;
  instance.$on('close', instance.close);
  pool.push(instance);
  return instance;
}

Toast.close = () => {
  pool.forEach(ins => ins.close());
};

['info', 'error', 'success', 'warning'].forEach((type) => {
  Toast[type] = message => Toast({ message, type });
});

Toast.loading = (message = 'loading') => Toast({ message, duration: 0, type: 'loading' });

export default Toast;
