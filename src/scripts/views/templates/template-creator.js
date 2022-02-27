/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';

const createRestoDetailTemplates = (restaurant) => `
    <div class="resto-title-container">
        <h2 class="resto-title">${restaurant.name}</h2>
        <div class="resto-categories">
        ${restaurant.categories.map((categorie) => `
            <small class="resto-categories">${categorie.name}</small>
        `).join('')} Restaurant
        </div>
        </div>
        <div class="info-container">
            <img class="resto-poster lazyload" data-src="${CONFIG.IMAGE_API + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="resto-info">
            <h4>Rating: ${restaurant.rating}</h4>
            <p class="resto-location">${restaurant.address}, ${restaurant.city}</p>
        </div>
    </div>
    <div class="detail-info">
        <h5>Overview</h5>
        <p class="resto-desc">${restaurant.description}</p>
        <h5>Menus</h5>
        <p>
            Foods:
            <ol>
            ${restaurant.menus.foods.map((food) => `
                <li>${food.name}</li>
            `).join('')}
            </ol>
        </p>
        <p>
            Drinks:
            <ol>
                ${restaurant.menus.drinks.map((drink) => `
                    <li>${drink.name}</li>
                `).join('')}
            </ol>
        </p>
    </div>
    <hr>
    <div class="review-container">
        <h4>Customer Review</h4>
        ${restaurant.customerReviews.map((review) => `
            <div class="cust-review">
                <img class="lazyload" data-src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" alt=${review.name} width="50" height="50px">
                <div class="cust-info">
                    <p>${review.name} - ${review.date}</p>
                    <p>${review.review}</p>
                </div>
            </div>
        `).join('')}
    </div>
    <div class="form-review">
    <h4>Submit your review here!</h4>
    <form id="form-review">
        <input type="text" placeholder="Enter name..." id="name" required>
        <textarea type="text" placeholder="Enter review..." id="review" required></textarea>
        <button id="btn-post">Submit</button>
    </form>
    </div>
`;

const createRestoDetailItemTemplate = (restaurant) => `
    <article class="card-menu" >
        <div class="title-pic">
            <img class="img-menu lazyload" data-src=${CONFIG.IMAGE_API + restaurant.pictureId} alt=${restaurant.name}>
                <div class="city-card">
                    <p class="city">Kota ${restaurant.city}</p>
                </div>
        </div>
        <div class="menu-desc">
            <p class="rating">Rating: ${restaurant.rating}</p>
            <p class="des-name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></p>
            <p class="descript">${restaurant.description}</p>
        </div>
    </article>
`;

const createSkeletonTemplate = () => `
    <article class="card-menu" >
    <div class="skeleton">
        <div class="skeleton-pic"></div>
            <div class="skeleton">
                <p class="skeleton"></p>
            </div>
    </div>
    <div class="menu-desc">
        <p class="skeleton skeleton-text-pangkas"></p>
        <p class="skeleton skeleton-text-pangkas"></a></p>
        <div>
            <p class="skeleton skeleton-text"></p>
            <p class="skeleton skeleton-text"></p>
            <p class="skeleton skeleton-text"></p>
            <p class="skeleton skeleton-text"></p>
        </div>
    </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestoDetailTemplates,
    createRestoDetailItemTemplate,
    createSkeletonTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
};
