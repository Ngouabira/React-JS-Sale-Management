export const clearLocalStorage = () => {
    localStorage.clear()
}

export const saveToken = (token: string) => {
    localStorage.setItem('access_token', token)
}

export const getToken = () => {
    return localStorage.getItem('access_token')
}

export const isLogged = () => {
    return !!localStorage.getItem('access_token')
}