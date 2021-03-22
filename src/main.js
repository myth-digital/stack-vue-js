import Vue from 'vue';
import router from './router';
import App from './App.vue';
import axios from './http';
import store from './store/index';

// Import plugins
import VueAxios from 'vue-axios';
import VueTailwind from 'vue-tailwind';
import VueMoment from 'vue-moment';
import '@/assets/css/tailwind.css';

Vue.use(VueTailwind);
Vue.use(VueAxios, axios);
Vue.use(VueMoment);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
