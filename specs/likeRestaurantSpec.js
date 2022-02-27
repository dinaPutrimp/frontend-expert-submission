/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import * as TestFactories from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favoriterestaurant-idb';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Liking A Restaurant', () => {
    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e8' });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the restaurant has not been liked before', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e8' });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the restaurant', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e8' });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteRestaurantIdb.getRestaurant('rqdv5juczeskfw1e8');

        expect(restaurant).toEqual({ id: 'rqdv5juczeskfw1e8' });

        FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e8');
    });

    it('should not add a restaurant again when its already liked', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 'rqdv5juczeskfw1e8' });

        await FavoriteRestaurantIdb.putRestaurant({ id: 'rqdv5juczeskfw1e8' });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 'rqdv5juczeskfw1e8' }]);

        FavoriteRestaurantIdb.deleteRestaurant('rqdv5juczeskfw1e8');
    });

    it('should not add a restaurant when it has no id', async () => {
        await TestFactories.createLikeButtonPresenterWithRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
    });
});