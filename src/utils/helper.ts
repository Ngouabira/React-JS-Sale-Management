import { jwtDecode } from "jwt-decode";
import AuthResponse from "@models/auth.response";

export const clearLocalStorage = () => {
    localStorage.clear();
}

export const saveToken = (token: string) => {
    localStorage.setItem('access_token', token)
}

export const getToken = () => localStorage.getItem('access_token') ?? '';


export const isLogged = () => !!localStorage.getItem('access_token')


export const decodeToken = (): AuthResponse => jwtDecode(getToken()) as AuthResponse


export const isTokenExpired = (): boolean => {
    const token = getToken();
    if (token == "") {
        return true;
    } else {

        return decodeToken().exp < (Date.now() / 1000);
    }
}


export const getUserRoleFromToken = (): string => decodeToken().role

export const numberToArray = (value: number): number[] => {
    let tab = [];
    for (let i = 1; i <= value; i++) {
        tab.push(i);
    }
    return tab;
}

export function objectToAssociativeArray<T>(obj: T): { [key: string]: any } {
    let associativeArray: { [key: string]: any } = {};

    for (let key in obj) {
        if (obj?.hasOwnProperty(key)) {
            associativeArray[key] = obj[key];
        }
    }

    return associativeArray;
}


export function listToAssociativeArrayList<T>(list: T[]): { [key: string]: any }[] {
    return list.map(objectToAssociativeArray);
}
