import Button from '../packages/button';
import Header from '../packages/header';
import Layout from '../packages/layout';
import Tabbar from '../packages/tabbar';
import TabbarItem from '../packages/tabbar-item';
import Tabs from '../packages/tabs';
import TabItem from '../packages/tab-item';
import Badge from '../packages/badge';

// directive
import Ripple from './directives/ripple';

const version = '0.0.1';

const components = [
  Button,
  Header,
  Tabbar,
  TabbarItem,
  Layout,
  Tabs,
  TabItem,
  Badge
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
