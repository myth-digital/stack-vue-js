import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './http'
// import store from './store'

// Import plugins
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(VueAxios, axios)
app.use(router)
// app.use(store)

app.mount('#app')
