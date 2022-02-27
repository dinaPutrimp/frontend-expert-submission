/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
const itActsFavoriteRestaurantModel = (favoriteRestaurant) => {
    it('should return the restaurant that has been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e8' });
        favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });

        expect(await favoriteRestaurant.getRestaurant('rqdv5juczeskfw1e8')).toEqual({ id: 'rqdv5juczeskfw1e8' });
        expect(await favoriteRestaurant.getRestaurant('s1knt6za9kkfw1e867')).toEqual({ id: 's1knt6za9kkfw1e867' });
        expect(await favoriteRestaurant.getRestaurant('w9pga3s2tubkfw1e867')).toEqual(undefined);
    });

    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
        favoriteRestaurant.putRestaurant({ aProperty: 'property' });

        expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
    });

    it('can return all of the restaurants that have been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e8' });
        favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });

        expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
            { id: 'rqdv5juczeskfw1e8' },
            { id: 's1knt6za9kkfw1e867' },
        ]);
    });

    it('should remove favorite restaurant', async () => {
        favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e8' });
        favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
        favoriteRestaurant.putRestaurant({ id: 'w9pga3s2tubkfw1e867' });

        await favoriteRestaurant.deleteRestaurant('rqdv5juczeskfw1e8');

        expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
            { id: 's1knt6za9kkfw1e867' },
            { id: 'w9pga3s2tubkfw1e867' },
        ]);
    });

    it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
        favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e8' });
        favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
        favoriteRestaurant.putRestaurant({ id: 'w9pga3s2tubkfw1e867' });

        await favoriteRestaurant.deleteRestaurant('uewq1zg2zlskfw1e867');

        expect(await favoriteRestaurant.getAllRestaurants()).toEqual([
            { id: 'rqdv5juczeskfw1e8' },
            { id: 's1knt6za9kkfw1e867' },
            { id: 'w9pga3s2tubkfw1e867' },
        ]);
    });
};

export { itActsFavoriteRestaurantModel };
