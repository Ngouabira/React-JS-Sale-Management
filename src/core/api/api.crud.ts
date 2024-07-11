import FilterRequest from "@models/filter.request";
import { API_URL, HEADER } from "@utils/const";

export const createItem = async <T>(urlPart: string, item: T) => {
    return await fetch(`${API_URL}/${urlPart}`, {
        headers: {
            ...HEADER
        },
        method: 'POST',
        body: JSON.stringify(item)
    })
}


export const readItems = async (urlPart: string, filter: FilterRequest) => {
    return await fetch(
        `${API_URL}/${urlPart}?param=${filter.param}&page=${filter.page}&size=${filter.size}`,
        {
            headers: {
                ...HEADER
            },
            method: "GET"
        }
    );
}

export const updateItem = async <T>(urlPart: string, id: number, item: T) => {
    return await fetch(`${API_URL}/${urlPart}/${id}`, {
        headers: {
            ...HEADER
        },
        method: 'PUT',
        body: JSON.stringify(item)
    })
}

export const deleteItem = async (urlPart: string, id: number) => {
    return await fetch(`${API_URL}/${urlPart}/${id}`, {
        headers: {
            ...HEADER
        },
        method: 'DELETE',
    })
}

export const getItem = async (urlPart: string, id: number) => {
    return await fetch(`${API_URL}/${urlPart}/${id}`, {
        headers: {
            ...HEADER
        },
        method: 'GET',
    })
}


