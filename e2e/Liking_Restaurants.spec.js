/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
    I.amOnPage('/#/favorite');
});

Scenario('liking a restaurant', async (I) => {
    I.see('You dont have favorite restaurant', '.not-found');

    I.amOnPage('/');

    I.seeElement('.des-name a');

    const firstResto = locate('.des-name a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-menu');

    const likedRestoTitle = await I.grabTextFrom('.des-name');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking a restaurant', async (I) => {
    I.see('You dont have favorite restaurant', '.not-found');

    I.amOnPage('/');

    I.seeElement('.des-name a');

    const firstResto = locate('.des-name a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-menu');

    const likedRestoTitle = await I.grabTextFrom('.des-name');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);

    I.seeElement('.des-name a');

    const firstLikedResto = locate('.des-name a').first();
    const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);
    I.click(firstLikedResto);

    I.seeElement('.resto-title-container');

    const unlikedRestoTitle = await I.grabTextFrom('.resto-title');

    assert.strictEqual(firstLikedRestoTitle, unlikedRestoTitle);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('You dont have favorite restaurant', '.not-found');
});

Scenario('review a restaurant', async (I) => {
    I.see('You dont have favorite restaurant', '.not-found');

    I.amOnPage('/');

    I.seeElement('.des-name a');

    const firstResto = locate('.des-name a').first();
    const firstRestoTitle = await I.grabTextFrom(firstResto);
    I.click(firstResto);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.card-menu');

    const likedRestoTitle = await I.grabTextFrom('.des-name');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);

    I.seeElement('.des-name a');

    const firstLikedResto = locate('.des-name a').first();
    const firstLikedRestoTitle = await I.grabTextFrom(firstLikedResto);
    I.click(firstLikedResto);

    I.seeElement('.resto-title-container');

    const unlikedRestoTitle = await I.grabTextFrom('.resto-title');

    assert.strictEqual(firstLikedRestoTitle, unlikedRestoTitle);

    I.seeElement('.form-review');
    I.fillField('#name', 'Arsyad');
    I.fillField('#review', 'Cocok untuk pelajar');
    I.click('#btn-post', '#form-review');
    I.seeElement('.cust-review');
});

Scenario('searching a restaurant', (I) => {
    I.see('You dont have favorite restaurant', '.not-found');

    I.amOnPage('/');

    I.seeElement('.search-container');

    I.fillField('#search', 'jawa');
    I.click('#btn-search');
    I.seeElement('.card-menu');
});