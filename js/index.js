import Router from './classes/Router.js';
import { Home, RaisingPuppies, AboutTheBreed, AboutUs } from './views/index.js';

const root = document.querySelector('#root');
const burger = document.createElement('div');
burger.classList.add('burger');
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
    {
        path: '/about_the_breed',
        title: 'About the Breed',
        view: AboutTheBreed
    },
    {
        path: '/about_us',
        title: 'About Us',
        view: AboutUs
    },
];

const router = new Router(root,
    document.createElement('nav'),
    document.createElement('section'),
    routes
);

router.addRoutesToNav();
router.display.classList.add('routes');
burger.addEventListener('click', function (e) {
    e.stopPropagation();
    router.nav.classList.toggle('open');
});
router.display.addEventListener('click', function (e) {
    e.stopPropagation();
    router.nav.classList.remove('open');
});
document.querySelector('header').addEventListener('click', function (e) {
    e.stopPropagation();
    router.nav.classList.remove('open');
});

router.findRouteMatch();

if (window.innerWidth > 800) window.onload = _ => {
    function addSmallClass() {
        document.querySelector('header').classList.add('small');
    }
    localStorage.getItem('notFirstVisit') ? addSmallClass() : setTimeout(addSmallClass, 2500);
};

window.onbeforeunload = _ => localStorage.setItem('notFirstVisit', true);
