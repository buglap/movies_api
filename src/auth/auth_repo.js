import { config } from "dotenv";
config()
import pkg from 'axios';
const { get, post } = pkg;

const API_KEY = process.env.MOVIES_API_KEY;

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY_PARAM = `api_key=${API_KEY}`;
const LANGUAGE_PARAM = `language=en-US`;
const AUTHENTICATION_PATH = `/authentication`;
const GUEST_SESSION_PATH = `/guest_session/new`;
const TOKEN_PATH = `/token/new`;

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

function getGuestSession() {
    const targetURL = `${BASE_URL}${AUTHENTICATION_PATH}${GUEST_SESSION_PATH}?${API_KEY_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

function getResquestToken() {
    const targetURL = `${BASE_URL}${AUTHENTICATION_PATH}${TOKEN_PATH}?${API_KEY_PARAM}`;
    return get(targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

function createSessionId(request_token){
    const targetURL = `${BASE_URL}${AUTHENTICATION_PATH}${TOKEN_PATH}?${API_KEY_PARAM}`;
    return post(targetURL, request_token)
    .then(res => res.data)
    .catch((error) => {console.error(error.message)});
}

export {getResquestToken, getGuestSession, createSessionId};