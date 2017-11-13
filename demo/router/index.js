import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/Index';
import Button from '../pages/Button';
import Header from '../pages/Header';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/button', name: 'Button', component: Button },
    { path: '/header', name: 'Header', component: Header }
  ]
});
