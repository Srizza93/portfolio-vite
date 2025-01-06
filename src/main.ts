import { createApp } from 'vue';
import router from './router/index.js';
import { createPinia } from 'pinia';
import App from './App.vue';

import i18n from './i18n/index.js';

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(pinia);
app.mount('#app');
