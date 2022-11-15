import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/components/Home.vue';
import Projects from '/src/components/Projects.vue';

import TheHeader from './components/TheHeader.vue';

import App from './App.vue';

import './index.css';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);

app.component('the-header', TheHeader);
app.use(router);
app.mount('#app');
