import { createRouter, createWebHistory } from 'vue-router';
import { PATH } from "./path";

const syncHomePage = () => import('./pages/home.vue');
const syncVeeValidateComponentsPage = () => import('./pages/VeeValidateComponents.vue');
const syncVeeValidatePasswordPage = () => import('./pages/VeeValidatePassword.vue');
const syncVuelidateSimplePage = () => import('./pages/VuelidateSimple.vue');

export const routerHistory = createWebHistory();

export const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    {
      path: '/',
      component: syncHomePage,
    },
    {
      path: PATH.VeeValidateComponent,
      name: 'VeeValidateComponent',
      component: syncVeeValidateComponentsPage,
    },
    {
      path: PATH.VeeValidatePassword,
      name: 'VeeValidatePassword',
      component: syncVeeValidatePasswordPage,
    },
    {
      path: PATH.VuelidateSimple,
      name: 'VuelidateVue2',
      component: syncVuelidateSimplePage,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (/.\/$/.test(to.path)) {
    console.log('remove trailing slashes');
    to.meta.redirectCode = 301;
    next(to.path.replace(/\/$/, ''));
  } else {
    next();
  }
});
