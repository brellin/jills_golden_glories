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
            title: 'Golden Glories - Home',
            name: 'Home',
        }
    },
    {
        path: '/puppies',
        component: Puppies,
        meta: {
            title: 'Golden Glories - Puppies',
            name: 'Puppies'
        }
    },
    {
        path: '/about_the_breed',
        component: AboutTheBreed,
        meta: {
            title: 'Golden Glories - About The Breed',
            name: 'About The Breed'
        }
    },
    {
        path: '/bloodlines',
        component: Bloodlines,
        meta: {
            title: 'Golden Glories - Bloodlines',
            name: 'Bloodlines'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    scrollBehavior: (to, from, savedPosition) => savedPosition ? savedPosition :
        to.hash ? { selector: to.hash, behavior: 'smooth' } :
            { top: '50vh', behavior: 'smooth' }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : 'Golden Glories';
    next();
});

export default router;

export {
    routes
};
