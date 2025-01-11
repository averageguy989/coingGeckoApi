const axios = require('axios');

const coinGeckoApi = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 5000,
    headers: {
        x_cg_demo_api_key: process.env.COINGECKO_API_KEY
    }
})

module.exports = coinGeckoApi;