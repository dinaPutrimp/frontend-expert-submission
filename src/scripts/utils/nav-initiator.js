/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const NavInitiator = {
    init({ button, nav, main }) {
        button.addEventListener('click', (event) => {
            this._toggleNav(event, nav);
        });

        main.addEventListener('click', (event) => {
            this._closeNav(event, nav);
        });
    },

    _toggleNav(event, nav) {
        event.stopPropagation();
        nav.classList.toggle('nav-active');
    },

    _closeNav(event, nav) {
        event.stopPropagation();
        nav.classList.remove('nav-active');
    },
};

export default NavInitiator;
