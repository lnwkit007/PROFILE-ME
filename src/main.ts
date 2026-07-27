import { createApp } from 'vue'

// import style
import './style/global.css'

// import view
import App from './App.vue'

// import router
import router from './router/index.ts'

// import pinia
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
