/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
/* eslint-disable no-ex-assign */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import RestaurantsSource from '../../data/restaurants-source';
import { createRestoDetailItemTemplate, createSkeletonTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <div class="hero">
                <picture>
                    <source type="image/webp" media="(max-width: 700px)" srcset="./images/hero-image_2-large.webp">
                    <source type="image/jpeg" media="(max-width: 700px)" srcset="./images/hero-image_2-large.jpg">
                    <img
                        class="lazyload"
                        data-src="./images/hero-image_2-Xlarge.jpg" alt="Restaurants list" />
                </picture>
            </div>
            <div class="content">
                <h1>Explore Restaurants</h1>
                <div class="search-container">
                    <input id="search" type="text" placeholder="Enter restaurant name or categorie..." required>
                    <button id="btn-search">Search</button>
                </div>
                <div class="menu"></div>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantsSource.listRestaurants();
        this.getSkeletonLoading(restaurants);
        const restaurantCard = document.querySelector('.menu');
        setTimeout(async () => {
            restaurantCard.innerHTML = '';
            restaurants.forEach((restaurant) => {
                restaurantCard.innerHTML += createRestoDetailItemTemplate(restaurant);
            });
        }, 2000);

        //search-event
        const searchInput = document.querySelector('#search');
        const btnSearch = document.querySelector('#btn-search');
        btnSearch.addEventListener('click', async () => {
            try {
                const searchResults = await RestaurantsSource.searchRestaurant(searchInput.value);
                restaurantCard.innerHTML = '';
                if (searchResults.length < 1) {
                    restaurantCard.innerHTML = this.getNotFoundMessage(searchInput.value);
                } else {
                    this.getSkeletonLoading(searchResults);
                    setTimeout(() => {
                        restaurantCard.innerHTML = '';
                        searchResults.forEach((restaurant) => {
                            restaurantCard.innerHTML += createRestoDetailItemTemplate(restaurant);
                        });
                    }, 2000);
                }
            } catch (err) {
                alert(err = 'Please fill the form');
            }
        });
    },

    getNotFoundMessage(message) {
        return `<h3 class="not-found">"${message}" not found</h3>`;
    },

    getSkeletonLoading(cards) {
        const restaurantCard = document.querySelector('.menu');
        for (let count = 0; count < cards.length; count++) {
            restaurantCard.innerHTML += createSkeletonTemplate();
        }
    },
};

export default Home;