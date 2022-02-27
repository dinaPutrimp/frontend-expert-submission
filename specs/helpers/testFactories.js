/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };
