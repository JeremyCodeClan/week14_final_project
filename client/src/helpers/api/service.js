import client from 'helpers/api/client';

// binance chart api
export const getChartHistory = (coinQuery) => {
    return client.get(`history?type=${coinQuery}`);
}

// coinbase auth api 
export const redirectToken = (code) => {
    return client.get(`token?code=${code}`)
}
export const requestSignout = (uid) => {
    return client.get(`signout?uid=${uid}`)
}

// coinbase api
export const getProfile = (uid) => {
    return client.get(`get_profile?uid=${uid}`)
}
export const getAssets = (uid) => {
    return client.get(`get_assets?uid=${uid}`)
}
