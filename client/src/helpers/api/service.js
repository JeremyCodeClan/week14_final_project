const baseUrl = "http://localhost:5000/"

export const getChartHistory = (coinQuery) => {
    return fetch(baseUrl + `history?type=${coinQuery}`)
        .then(res => res.json())
}