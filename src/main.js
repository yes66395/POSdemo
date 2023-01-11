import { createApp } from 'vue';
import './style/style.css';
import router from './route/router.js';
import App from './App.vue';
const app = createApp(App);
app.use(router).mount('#app');
