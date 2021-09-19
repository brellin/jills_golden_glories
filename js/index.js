import Router from './Router.js';
import Home from "./views/Home.js";
import RaisingPuppies from "./views/RaisingPuppies.js";

const routes = [
    {
        path: '/',
        title: 'Home',
        view: Home
    },
    {
        path: '/raising_puppies',
        title: 'Raising Puppies',
        view: RaisingPuppies
    },
];

const router = new Router(document.querySelector('#root'),
    document.createElement('nav'),
    document.createElement('section'),
    routes
);

router.addRoutesToNav();
router.addNavAndDisplayToRoot();
