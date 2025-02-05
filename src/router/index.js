import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginForm.vue';
import Home from '../components/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'HomeView',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
