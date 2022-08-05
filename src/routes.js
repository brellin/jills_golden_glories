import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Puppies from './views/Puppies.vue';
import AboutTheBreed from './views/AboutTheBreed.vue';
import Bloodlines from './views/Bloodlines.vue';
import PuppyManager from './views/PuppyManager.vue';

const titlize = title => `Golden Glories - ${ title }`;

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: titlize('Home'),
            name: 'Home',
        }
    },
    {
        path: '/puppies',
        component: Puppies,
        meta: {
            title: titlize('Puppies'),
            name: 'Puppies'
        }
    },
    {
        path: '/about_the_breed',
        component: AboutTheBreed,
        meta: {
            title: titlize('About the Breed'),
            name: 'About the Breed'
        }
    },
    {
        path: '/bloodlines',
        component: Bloodlines,
        meta: {
            title: titlize('Bloodlines'),
            name: 'Bloodlines'
        }
    },
    {
        path: '/puppyManager',
        component: PuppyManager,
        meta: {
            title: titlize('Puppy Manager'),
            name: 'Puppy Manager'
        },
        beforeEnter: (to, from, next) => {
            console.log('to', to, '\nfrom', from);
            next('/');
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
            { top: '0', behavior: 'smooth' }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : 'Golden Glories';
    next();
});

export default router;

export {
    routes
};
