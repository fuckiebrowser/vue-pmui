// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

import Button from '../packages/button';

import Ripple from './directives/ripple';

Vue.config.productionTip = false;

Vue.use(Ripple);
Vue.use(Button);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
});
