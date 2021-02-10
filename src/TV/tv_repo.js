import { config } from "dotenv";
config()
import pkg from 'axios';
const { get, post } = pkg;

const API_KEY = process.env.MOVIES_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY_PARAM = `api_key=${API_KEY}`;
const LANGUAGE_PARAM = `language=en-US`;
const TV_POPULAR_LIST_PATH = `popular`;
const TV_DETAIL_PATH = `/tv/`;
const TOP_RATED_TV_PATH = `top_rated`;
const REVIEWS_TV_PATH = `/reviews`;


function getHTTPClient(httpRequestMethod, url) {
    switch (httpRequestMethod) {
        case "GET":
            return get(url);
        case "POST":
            return post(url);
        default:
            return get(url);
    }
}

function getAllPopularTV() {
    const targetURL = `${BASE_URL}${TV_DETAIL_PATH}${TV_POPULAR_LIST_PATH}?${API_KEY_PARAM}&${LANGUAGE_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}
function getAllTopRatedTV() {
    const targetURL = `${BASE_URL}${TV_DETAIL_PATH}${TOP_RATED_TV_PATH}?${API_KEY_PARAM}&${LANGUAGE_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

function getTVById(tvId) {
    const targetURL = `${BASE_URL}${TV_DETAIL_PATH}${tvId}?${API_KEY_PARAM}&${LANGUAGE_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

function getAllTVReviews(tvId) {
    const targetURL = `${BASE_URL}${TV_DETAIL_PATH}${tvId}${REVIEWS_TV_PATH}?${API_KEY_PARAM}&${LANGUAGE_PARAM}`;
    
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

export {getAllPopularTV, getAllTopRatedTV, getTVById, getAllTVReviews};