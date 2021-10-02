import { Router } from './classes/index';
import { Home, RaisingPuppies, AboutTheBreed, AboutUs } from './views/index.js';

let isWide = window.innerWidth > 800;

window.addEventListener('resize', function () {
    const burger = document.querySelector('.burger');
    if (window.innerWidth <= 800 && !burger) addBurger();
    else if (window.innerWidth > 800) {
        if (burger) root.removeChild(burger);
        if (!header.classList.contains('small')) header.classList.add('small');
    }
});
const root = document.querySelector('#root');
const header = document.querySelector('header');

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

const display = document.createElement('section');
display.classList.add('routes');

const router = new Router(root,
    document.createElement('nav'),
    display,
    routes
);

function addBurger() {
    const burger = document.createElement('div');
    burger.classList.add('burger');
    root.appendChild(burger);
    burger.addEventListener('click', function (e) {
        e.stopPropagation();
        router.nav.classList.toggle('open');
    });
    document.body.addEventListener('click', function (e) {
        e.stopPropagation();
        router.nav.classList.remove('open');
    });
}

if (!isWide && !document.querySelector('.burger')) addBurger();

if (isWide) window.addEventListener('load', function () {
    localStorage.getItem('notFirstVisit') ? header.classList.add('small') : setTimeout(function () { header.classList.add('small'); }, 2500);
});

window.addEventListener('beforeunload', function () { localStorage.setItem('notFirstVisit', true); });
