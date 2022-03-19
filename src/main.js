import { createApp } from 'vue'
import App from './App.vue'
import firebaseConfig from './firebaseConfig.js';

firebaseConfig

const app = createApp(App);
app.mount('#app')
