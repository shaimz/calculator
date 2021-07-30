import {createRouter, createWebHistory} from 'vue-router';

function load(component) {
    return () => import(/* webpackChunkName: "frontend-chunk-" */ /* webpackPreload: true */`../components/${component}.vue`)
}
function view(component) {
    return () => import(/* webpackChunkName: "frontend-chunk-" */ /* webpackPreload: true */`./../views/${component}.vue`)
}

const routes = [
    {
        path: '/',
        component:{
            template:'<router-view></router-view>'
        },
        children:[
            {
                path: '',
                name: 'Home',
                component: view('Home')
            },
            {
                path: 'calculator',
                name: 'Calculator',
                component: view('Calculator')
            },
            {
                path: 'login',
                name: 'Login',
                component: load('login')
            },
            {
                path: 'register',
                name: 'Register',
                component: load('register')
            }
        ]

    }
];

const router =  createRouter({
    history:createWebHistory(),
    routes,
});

export default router;
