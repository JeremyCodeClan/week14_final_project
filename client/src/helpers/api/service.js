import client from 'helpers/api/client';

export const getChartHistory = (coinQuery) => {
    return client.get(`history?type=${coinQuery}`);
}

export const redirectToken = (code) => {
    return client.get(`token?code=${code}`)
}

// const baseUrl = "http://localhost:5000/"
// export const getChartHistory = (coinQuery) => {
//     return fetch(baseUrl + `history?type=${coinQuery}`)
//         .then(res => res.json())
// }
