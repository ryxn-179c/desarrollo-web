import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginForm.vue';
import Home from '../components/Home.vue';
import Perfil from '../components/Perfil.vue'; // Importamos la vista de perfil
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
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil // Agregamos la ruta de perfil
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
