import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import axios from './plugins/axios'

// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import bootstrap from 'bootstrap'
// Make BootstrapVue available throughout your project

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(bootstrap)
// app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin

app.mount('#app')
