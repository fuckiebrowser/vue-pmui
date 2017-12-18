import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: () => import('../pages/Index') },
    { path: '/button', name: 'Button', component: () => import('../pages/Button') },
    { path: '/header', name: 'Header', component: () => import('../pages/Header') },
    { path: '/tabbar', name: 'tabbar', component: () => import('../pages/Tabbar') },
    { path: '/tabs', name: 'tabs', component: () => import('../pages/Tabs') },
    { path: '/badge', name: 'badge', component: () => import('../pages/Badge') },
    { path: '/cell', name: 'cell', component: () => import('../pages/Cell') },
    { path: '/swipe', name: 'swipe', component: () => import('../pages/Swipe') },
    { path: '/popup', name: 'popup', component: () => import('../pages/Popup') },
    { path: '/picker', name: 'picker', component: () => import('../pages/Picker') }
  ]
});
