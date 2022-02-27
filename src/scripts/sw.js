/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-restricted-globals */
/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
    // TODO: Caching App Shell Resource
    event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
    // TODO: Delete old caches
    event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
    // TODO: Add/get fetch request to/from caches
    event.respondWith(CacheHelper.revalidateCache(event.request));
});