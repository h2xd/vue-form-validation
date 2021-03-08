import { createRouter, createWebHashHistory } from 'vue-router';
import { PATH } from "./path";

const syncHomePage = () => import('./pages/home.vue');
const syncVeeValidateComponentsPage = () => import('./pages/VeeValidateComponents.vue');
const syncVeeValidatePasswordPage = () => import('./pages/VeeValidatePassword.vue');
const syncVeeValidateCustomComponentPage = () => import('./pages/VeeValidateCustomComponent.vue');
const syncVuelidateSimplePage = () => import('./pages/VuelidateSimple.vue');
const syncVuelidateCustomComponentPage = () => import('./pages/VuelidateCustomComponent.vue');

export const routerHistory = createWebHashHistory();

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
      path: PATH.VeeValidateCustomComponent,
      name: 'VeeValidateCustomComponent',
      component: syncVeeValidateCustomComponentPage,
    },
    {
      path: PATH.VuelidateSimple,
      name: 'VuelidateSimple',
      component: syncVuelidateSimplePage,
    },
    {
      path: PATH.VuelidateCustomComponent,
      name: 'VuelidateCustomComponent',
      component: syncVuelidateCustomComponentPage,
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
