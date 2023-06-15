import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import  PopupPlugin  from '../plugins/popupPlugin/popup'

createApp(App).use(PopupPlugin).mount('#app')
