import { createRouter, createWebHistory } from 'vue-router';
import MagicNav from '../views/MagicNav.vue';
import MainHome from '../views/MainHome.vue';
import ChangeColor from '@/views/ChangeColor.vue';

// 경로 지정
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainHome,
  },
  {
    path: '/magicNav',
    name: 'magicNav',
    component: MagicNav,
  },
  {
    path: '/chgColor',
    name: 'chageColor',
    component: ChangeColor,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
