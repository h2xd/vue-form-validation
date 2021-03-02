import { createApp } from 'vue'
import App from './App.vue'

import 'prismjs'
import 'prismjs/themes/prism.css'
import './assets/drakula-theme.css'
import { router } from './router'

const app = createApp(App)
app.use(router)

app.mount('#app')
