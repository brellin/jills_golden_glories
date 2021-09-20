import Router from './Router.js';
import { Home, RaisingPuppies } from './views/index.js';

const root = document.querySelector('#root');
const burger = document.createElement('div');
burger.classList.add('burger');
burger.addEventListener('click', function (e) {
    e.stopPropagation();
    router.nav.classList.toggle('open');
});
root.appendChild(burger);

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

const router = new Router(root,
    document.createElement('nav'),
    document.createElement('section'),
    routes
);

router.addRoutesToNav();
router.display.classList.add('routes');
