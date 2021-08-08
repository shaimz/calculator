import axios from 'axios';
import {createApp} from 'vue';
import router from './router/router'
import { store } from './store/store';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp({});

window.$ = window.jQuery = require('jquery');
window.axios = require('axios');
window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};

import master from './master.vue';

import {
    ElMenu,
    ElMenuItem,
    ElTabPane,
    ElTabs,
    ElTable,
    ElTableColumn,
    ElButton,
    ElInput,
    ElSelect,
    ElOption,
    ElTransfer,
    ElDialog,
    ElIcon,
    ElTree,
    ElCheckboxGroup,
    ElCheckbox,
    ElCollapse,
    ElCollapseItem
} from 'element-plus';

import ElTransferGroup from '../js/components/transfer/el-transfer-group';
const components = [
    ElMenuItem,
    ElMenu,
    ElTabPane,
    ElTabs,
    ElTable,
    ElTableColumn,
    ElButton,
    ElInput,
    ElSelect,
    ElOption,
    ElTransfer,
    ElDialog,
    ElIcon,
    ElTree,
    ElCheckboxGroup,
    ElCheckbox,
    ElCollapse,
    ElCollapseItem,
    ElTransferGroup
];

components.forEach(component => {
    app.component(component.name, component)
});


import {ElLoading} from 'element-plus';
app.use(ElLoading);

import vClickOutside from "click-outside-vue3"

app.use(vClickOutside);

app.use(router);
app.use(store);
app.component('master',master);
app.provide('$axios',axios);
app.mount('#app');
