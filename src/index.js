import Button from '../packages/button';
import Header from '../packages/header';
import Layout from '../packages/layout';
import Tabbar from '../packages/tabbar';
import Tabs from '../packages/tabs';
import TabItem from '../packages/tab-item';

// directive
import Ripple from './directives/ripple';

const version = '0.0.1';

const components = [
  Button,
  Header,
  Tabbar,
  Layout,
  Tabs,
  TabItem,
];

function install(Vue) {
  // components
  components.forEach(comp => Vue.component(comp.name, comp));
  // directive
  Vue.directive(Ripple.name, Ripple);
}

export default {
  version,
  install
};
