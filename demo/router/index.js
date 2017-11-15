import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: () => import('../pages/Index') },
    { path: '/button', name: 'Button', component: () => import('../pages/Button') },
    { path: '/header', name: 'Header', component: () => import('../pages/Header') },
    { path: '/tabbar', name: 'tabbar', component: () => import('../pages/Tabbar') },
    { path: '/tabs', name: 'tabs', component: () => import('../pages/Tabs') }
  ]
});
