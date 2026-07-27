import { createApp } from 'vue'

// import style
import './style/global.css'

// import view
import App from './App.vue'

// import router
import router from './router/index.ts'

const app = createApp(App)

app.use(router)
app.mount('#app')
