import { getToken } from "./helper";

export const API_URL = 'http://localhost:8000/api';

export const DEFAULT_HEADER = {
    'Content-Type': 'application/json'
};

export const HEADER = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
};