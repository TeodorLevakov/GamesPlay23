import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/games';


export const getAll = async () => {
    const response = await request('GET', baseUrl);

    return Object.values(response);
}

export const create = async (data) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    return result;
};

