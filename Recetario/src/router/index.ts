import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import useUserStore from '../store/userStore'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Profile from '../views/profile.vue'
import RecipeInfo from '../views/recipeInfo.vue'
import addRecipe from '../views/addRecipe.vue'
import searchBar from '../views/searchBar.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: Login },  
  { path: '/register', component: Register },
  { path: '/profile/:id/:name/:lastName/:userName/:email/:image', component: Profile },
  { path: '/recipeInfo/:id', component: RecipeInfo },
  { path: '/addRecipe', component: addRecipe },
  { path: '/searchBar', component: searchBar },
]

const router = createRouter({  
  history: createWebHistory(),  
  routes,  
});  


// Middleware para verificar autenticación  
router.beforeEach((to, from, next) => {  
  const userStore = useUserStore(); 
  userStore.loadSession(); 
  
  // Verificar si la ruta requiere autenticación y si no hay usuario logueado  
  if (to.meta.requiresAuth && !userStore.currentUser) {  
    next('/login'); // Redirigir a la página de login si no está autenticado  
  } else {  
    next(); // Permitimos el acceso  
  }  
});

export default router
