import axios from 'axios';
import {createApp} from 'vue';
import router from './router/router'
import { store } from './store/store';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp({});

window.$ = window.jQuery = require('jquery');

import master from './master.vue';

import {
    ElMenu,
    ElMenuItem
} from 'element-plus';

const components = [
    ElMenuItem,
    ElMenu
];

components.forEach(component => {
    app.component(component.name, component)
});

app.use(router);
app.use(store);
app.component('master',master);
app.provide('$axios',axios);
app.mount('#app');
