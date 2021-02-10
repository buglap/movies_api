import { config } from "dotenv";
config()
import pkg from 'axios';
const { get, post } = pkg;

const API_KEY = process.env.MOVIES_API_KEY;

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY_PARAM = `api_key=${API_KEY}`;
const LANGUAGE_PARAM = `language=en-US`;
const ACCOUNT_PATH = `/account`;
const RATED_MOVIES_PATH = `/rated/movies`;

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

function getAccount() {
    const targetURL = `${BASE_URL}${ACCOUNT_PATH}?${API_KEY_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

function getRatedMovies(accound_id) {
    const targetURL = `${BASE_URL}${ACCOUNT_PATH}${accound_id}/${RATED_MOVIES_PATH}?${API_KEY_PARAM}&${LANGUAGE_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

export {getRatedMovies, getAccount};