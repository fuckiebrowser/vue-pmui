import Vue from 'vue';
import toast from './toast';

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
  pool.splice(pool.indexOf(this), 1);
  body.removeChild(this.$el);
  this.$destroy();
}

function mount(instance) {
  instance.$mount();
  body.appendChild(instance.$el);
}

function Toast(options) {
  let props = {};
  if (typeof options === 'string') {
    props = { ...defaults, message: options };
  } else {
    props = { ...defaults, ...options };
  }

  const instance = new Vue({
    render(h) {
      return h(toast, { props, on: { close: () => this.close() } });
    }
  });

  pool.push(instance);
  mount(instance);

  instance.close = close;
  // setTimeout(() => instance.close(), props.duration);

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
