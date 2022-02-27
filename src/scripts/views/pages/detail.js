/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import { createRestoDetailTemplates } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantsSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#resto');
        restaurantContainer.innerHTML += createRestoDetailTemplates(restaurant);

        const postNameReviewer = document.querySelector('#name');
        const postReviewReviewer = document.querySelector('#review');
        const formReview = document.querySelector('#form-review');
        formReview.addEventListener('submit', async () => {
            const postReview = {
                id: url.id,
                name: postNameReviewer.value,
                review: postReviewReviewer.value,
            };
            if (navigator.onLine) {
                await RestaurantsSource.postReviewRestaurant(postReview);
            } else {
                alert('Please make sure your online before submitting');
            }
        });

        //like button
        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                pictureId: restaurant.pictureId,
                city: restaurant.city,
                rating: restaurant.rating,
            },
        });
    },
};

export default Detail;
