export const clearLocalStorage = () => {
    localStorage.clear()
}

export const saveToken = (token: string) => {
    localStorage.setItem('access_token', token)
}

export const getToken = () => {
    return localStorage.getItem('access_token') ?? '';
}

export const isLogged = () => {
    return !!localStorage.getItem('access_token')
}

export const numberToArray = (value: number): number[] => {
    let tab = [];
    for (let i = 0; i < value; i++) {
        tab.push(i);
    }
    return tab;
}
