import { Router } from 'router-vanilla';
import { Home, ENS, AboutTheBreed, Bloodlines } from './assets/views/index.js';

import './assets/sass/index.scss';

import headerImg from './assets/images/header.png';

let isWide = window.screen.width > 800;

window.addEventListener('resize', function () {
    const burger = document.querySelector('.burger');
    if (window.innerWidth <= 800 && !burger) addBurger();
    else if (isWide) {
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
        path: '/puppies',
        title: 'Puppies',
        view: ENS
    },
    {
        path: '/about_the_breed',
        title: 'About the Breed',
        view: AboutTheBreed
    },
    {
        path: '/bloodlines',
        title: 'Bloodlines',
        view: Bloodlines
    },
];

const display = document.createElement('section');
display.classList.add('routes');

const router = new Router(root,
    document.createElement('nav'),
    display,
    routes,
    {
        topOfPage: {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    }
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
