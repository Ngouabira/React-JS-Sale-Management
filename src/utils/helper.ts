import { jwtDecode } from "jwt-decode";
import AuthResponse from "../core/models/auth.response";

export const clearLocalStorage = () => {
    localStorage.clear()
}

export const saveToken = (token: string) => {
    localStorage.setItem('access_token', token)
}

export const getToken = () =>  localStorage.getItem('access_token') ?? '';


export const isLogged = () =>  !!localStorage.getItem('access_token')


export const decodeToken = (): AuthResponse => jwtDecode(getToken()) as AuthResponse


export const isTokenExpired = (): boolean => decodeToken().exp < (Date.now() / 1000)


export const getUserRoleFromToken = (): string => decodeToken().role

export const numberToArray = (value: number): number[] => {
    let tab = [];
    for (let i = 0; i < value; i++) {
        tab.push(i);
    }
    return tab;
}
