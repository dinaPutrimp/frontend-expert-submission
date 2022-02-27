/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
    HOME: `${CONFIG.RES_API}list`,
    DETAIL: (id) => `${CONFIG.RES_API}detail/${id}`,
    POST_REVIEW: `${CONFIG.RES_API}review`,
    SEARCH: (search) => `${CONFIG.RES_API}search?q=${search}`,
};

export default API_ENDPOINT;