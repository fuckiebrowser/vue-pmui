import BetterScroll from 'better-scroll';
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
import Switch from './components/switch';
import Swipe from './components/swipe';
import SwipeItem from './components/swipe-item';
import Popup from './components/popup';
import Picker from './components/picker';
import Radio from './components/radio';
import RadioList from './components/radio-list';
import Checkbox from './components/checkbox';
import CheckboxList from './components/checkbox-list';
import ActionSheet from './components/action-sheet';


// Global Api
import Toast from './components/toast';
import Dialog from './components/dialog';

// Directives
import Ripple from './directives/ripple';

const version = '1.0.0';

const components = [
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
  Switch,
  Swipe,
  SwipeItem,
  Popup,
  Picker,
  Radio,
  RadioList,
  Checkbox,
  CheckboxList,
  ActionSheet
];

function install(Vue) {
  // components
  components.forEach(comp => Vue.component(comp.name, comp));
  // directive
  Vue.directive(Ripple.name, Ripple);
  // apis
  Vue.use(Toast);
  Vue.use(Dialog);
}
const PMUI = {
  version,
  install,
  /* components */
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
  Switch,
  Swipe,
  SwipeItem,
  Popup,
  Picker,
  Radio,
  RadioList,
  Checkbox,
  CheckboxList,
  ActionSheet,
  /* api */
  Toast,
  Dialog,
  BetterScroll,
  /* directive */
  Ripple
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  window.PMUI = PMUI;
  install(window.Vue);
}

export default PMUI;
