/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestoDetailItemTemplate, createSkeletonTemplate } from '../templates/template-creator';

const Favorite = {
    async render() {
        return `
            <div class="content">
                <h2 class="fav-title">Favorite Restaurant</h2>
                <div class="menu"></div>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantContainer = document.querySelector('.menu');
        if (restaurants.length < 1) {
            restaurantContainer.innerHTML = this.getEmptyRestaurant();
        } else {
            this.getSkeletonLoading(restaurants);
            setTimeout(() => {
                restaurantContainer.innerHTML = '';
                restaurants.forEach((restaurant) => {
                    restaurantContainer.innerHTML += createRestoDetailItemTemplate(restaurant);
                });
            }, 2000);
        }
    },

    getEmptyRestaurant() {
        return '<h3 class="not-found">You dont have favorite restaurant</h3>';
    },

    getSkeletonLoading(cards) {
        const restaurantCard = document.querySelector('.menu');
        for (let count = 0; count < cards.length; count++) {
            restaurantCard.innerHTML += createSkeletonTemplate();
        }
    },
};

export default Favorite;