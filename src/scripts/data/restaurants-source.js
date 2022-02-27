/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
    static async listRestaurants() {
        const response = await fetch(API_ENDPOINT.HOME);
        const results = await response.json();
        return results.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const result = await response.json();
        return result.restaurant;
    }

    static async postReviewRestaurant(review) {
        const response = await fetch(API_ENDPOINT.POST_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(review),
        });
        return response.json();
    }

    static async searchRestaurant(search) {
        const response = await fetch(API_ENDPOINT.SEARCH(search));
        const results = await response.json();
        return results.restaurants;
    }
}

export default RestaurantsSource;
