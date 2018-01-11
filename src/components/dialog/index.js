import Instance from './instance';
import Dialog from './dialog';

Instance.install = (Vue) => {
  Vue.component(Dialog.name, Dialog);
  Vue.prototype.$dialog = Instance;
  Vue.prototype.$alert = Instance.alert;
  Vue.prototype.$confirm = Instance.confirm;
  Vue.prototype.$prompt = Instance.prompt;
};

export default Instance;
