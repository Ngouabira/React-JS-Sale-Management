import { getToken } from "./helper";

export const API_URL = 'http://127.0.0.1:8000/api';
export const TOKEN_KEY = 'access_token';

export const HEADER = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
}

export const DEFAULT_HEADER = {
    'Content-Type': 'application/json',
}