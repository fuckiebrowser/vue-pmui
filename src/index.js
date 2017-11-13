import Button from '../packages/button';
import Header from '../packages/header';
// directive
import Ripple from './directives/ripple';

const version = '0.0.1';

function install(Vue) {
  // components
  Vue.component(Button.name, Button);
  Vue.component(Header.name, Header);
  // directive
  Vue.directive(Ripple.name, Ripple);
}

export default {
  version,
  install
};
