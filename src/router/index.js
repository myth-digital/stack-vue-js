import Vue from 'vue';
import Router from 'vue-router';

// Modules
import ExampleRoutes from '../modules/example/router';

// Layout
import Shell from '../layouts/Shell.vue';

Vue.use(Router);

const baseRoutes = [
  {
    path: '/',
    redirect: '/'
  },
  {
    path: '/',
    name: 'shell',
    component: Shell,
    title: 'Project',
    children: []
  },
  {
    path: '*',
    redirect: {
      name: '404'
    }
  }
];

// Register routes
const routes = baseRoutes.concat( ExampleRoutes );

const router = new Router({
  mode: 'history',
  routes,
});

export default router;
