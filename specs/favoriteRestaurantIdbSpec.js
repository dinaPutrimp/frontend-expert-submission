/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';
import { itActsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
            await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        });
    });

    itActsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
