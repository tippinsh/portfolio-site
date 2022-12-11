import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import Home from '/src/components/Home.vue';
import Projects from '/src/components/Projects.vue';
import TheHeader from './components/TheHeader.vue';
import App from './App.vue';
import './index.css';

//Text scrambler
import GlitchedWriter from 'vue-glitched-writer';

// Font Awesome set-up
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret, faCode } from '@fortawesome/free-solid-svg-icons';

import {
    faGithub,
    faLinkedin,
    faSquareJs,
    faLaravel,
    faVuejs,
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(
    faUserSecret,
    faGithub,
    faLinkedin,
    faCode,
    faSquareJs,
    faLaravel,
    faVuejs
);

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

app.component('glitched-writer', GlitchedWriter);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('the-header', TheHeader);
app.use(router);
app.mount('#app');
