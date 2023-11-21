import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export const getOne = async (gameId) => {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
}

export const getAll = async () => {
    const response = await request.get(baseUrl);

    return Object.values(response);
};

export const create = async (data) => {
    // const response = await fetch(baseUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // });

    // const result = await response.json();

    const result = await request.post(baseUrl, data);

    return result;
};

