import Button from '../packages/button';
import Header from '../packages/header';
import Layout from '../packages/layout';
import Tabbar from '../packages/tabbar';
import TabbarItem from '../packages/tabbar-item';
import Tabs from '../packages/tabs';
import TabItem from '../packages/tab-item';
import Badge from '../packages/badge';
import CellGroup from '../packages/cell-group';
import CellItem from '../packages/cell-item';
import Swipe from '../packages/swipe';
import SwipeItem from '../packages/swipe-item';
import Popup from '../packages/popup';
import Picker from '../packages/picker';
import ActionSheet from '../packages/action-sheet';
import BetterScroll from '../packages/better-scroll';

// directive
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
}

export default {
  version,
  install
};
