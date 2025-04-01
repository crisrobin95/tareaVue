import './assets/reset.scss'
import './assets/variables.css'
import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
