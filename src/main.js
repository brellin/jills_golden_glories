import { createApp } from 'vue';

import App from './App.vue';
import router from './routes';
import './assets/styles/base.scss';

createApp(App)
    .use(router)
    .mount('#app');
