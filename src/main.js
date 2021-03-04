import { createApp } from 'vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import VueCodeHighlight from 'vue-code-highlight';

import App from './App.vue'
import { router } from './router'
import './assets/drakula-theme.css'

const app = createApp(App)
app.use(router)
app.use(VueCodeHighlight)

app.mount('#app')
