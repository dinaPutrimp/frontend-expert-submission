/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import NavInitiator from '../utils/nav-initiator';

class App {
    constructor({ button, nav, main }) {
        this._button = button;
        this._nav = nav;
        this._main = main;

        this._initialAppShell();
    }

    _initialAppShell() {
        NavInitiator.init({
            button: this._button,
            nav: this._nav,
            main: this._main,
        });
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._main.innerHTML = await page.render();
        const skipLinkEl = document.querySelector('.skip');
        skipLinkEl.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#main').focus();
        });
        await page.afterRender();
    }
}

export default App;
