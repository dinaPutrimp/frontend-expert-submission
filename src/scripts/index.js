/* eslint-disable eol-last */
/* eslint-disable indent */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/mobile.css';
import '../styles/main.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#hamburger'),
    nav: document.querySelector('.nav-links'),
    main: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});