import { createWebHistory, createRouter } from "vue-router";

// Build up routes based on module architecture
import exampleRoutes from '@/modules/example/router'

const defaultFallback = {
  path: '/',
  redirect: '/login'
};

const baseRoutes = [defaultFallback];

const routes = baseRoutes.concat(exampleRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = !!window.localStorage.getItem("token");
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !loggedIn)
    next({
      name: "Login"
    });
  next();
});

export default router;