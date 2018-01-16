import { API_URL, APP_ID, APP_SECRET, OAUTH_URL } from 'react-native-dotenv';
import OAuth2 from 'client-oauth2';
import JsonApi from 'devour-client';

export const hacksterOauth = new OAuth2({
    clientId: APP_ID,
    clientSecret: APP_SECRET,
    accessTokenUri: OAUTH_URL
});

export const Hackster = new JsonApi({
    apiUrl: API_URL,
    logger: false,
    pluralize: false
});

Hackster.define('channels');

export const setToken = (token) => {
    Hackster.headers.Authorization = `Bearer ${token}`;
};
