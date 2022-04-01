import { createApp } from 'vue';

import App from './App.vue';
import router from './routes';
import './assets/styles/base.scss';



const app = createApp(App);
app.config.globalProperties.notFirstVisit = JSON.parse(localStorage.getItem('notFirstVisit'));
app
    .use(router)
    .mount('#app');
