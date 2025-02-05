import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginForm.vue';
import Home from '../components/Home.vue';
import ErrorView from '../components/ErrorView.vue'; // Asegúrate que la ruta sea correcta

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
  },
  // Ruta comodín para redirigir a la página de error
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: ErrorView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
