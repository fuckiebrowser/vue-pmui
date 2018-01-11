import Toast from './instance';

Toast.install = (Vue) => {
  Vue.prototype.$toast = Toast;
  Vue.prototype.$loading = Toast.loading;
};

export default Toast;
