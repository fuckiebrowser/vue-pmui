// Components
import Button from './components/button';
import Header from './components/header';
import Layout from './components/layout';
import Tabbar from './components/tabbar';
import TabbarItem from './components/tabbar-item';
import Tabs from './components/tabs';
import TabItem from './components/tab-item';
import Badge from './components/badge';
import CellGroup from './components/cell-group';
import CellItem from './components/cell-item';
import Swipe from './components/swipe';
import SwipeItem from './components/swipe-item';
import Popup from './components/popup';
import Picker from './components/picker';
import ActionSheet from './components/action-sheet';
import BetterScroll from './components/better-scroll';

// Global Api
import Toast from './components/toast';

// Directives
import Ripple from './directives/ripple';

const version = '0.0.1';

const components = [
  BetterScroll,
  Button,
  Header,
  Tabbar,
  TabbarItem,
  Layout,
  Tabs,
  TabItem,
  Badge,
  CellGroup,
  CellItem,
  Swipe,
  SwipeItem,
  Popup,
  Picker,
  ActionSheet
];

function install(Vue) {
  // components
  components.forEach(comp => Vue.component(comp.name, comp));
  // directive
  Vue.directive(Ripple.name, Ripple);
  // apis
  Vue.prototype.$toast = Toast;
  console.log([Toast]);
}

export default {
  version,
  install
};
