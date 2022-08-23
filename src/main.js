import { createApp } from 'vue';

import App from './App.vue';
import router from './routes';
import store from './plugins/vuex';
import './assets/styles/base.scss';
import DotLoader from 'vue-spinner/src/DotLoader.vue';

const app = createApp(App);
app.config.globalProperties.notFirstVisit = JSON.parse(localStorage.getItem('notFirstVisit'));
app.component('DotLoader', DotLoader);
app
    .use(router)
    .use(store)
    .mount('#app');
