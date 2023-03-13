import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import pinia from './store'
import Shop from './Shop.vue'
import Root from './Root.vue'
import router from './router'

const app= createApp(Shop)
app.use(pinia)
app.use(router)
app.mount('#app')
