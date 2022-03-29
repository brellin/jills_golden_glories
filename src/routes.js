import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Puppies from './views/Puppies.vue';
import AboutTheBreed from './views/AboutTheBreed.vue';
import Bloodlines from './views/Bloodlines.vue';

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Golden Glories - Home'
        }
    },
    {
        path: '/puppies',
        component: Puppies,
    },
    {
        path: '/about_the_breed',
        component: AboutTheBreed
    },
    {
        path: '/bloodlines',
        component: Bloodlines
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    scrollBehavior: (to, from, savedPosition) => savedPosition ? savedPosition :
        to.hash ? { selector: to.hash, behavior: 'smooth' } :
            { top: 0, behavior: 'smooth' }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : 'Will Umstead';
    next();
});

export default router;
