const CryptoDataModel = require('../model/crypto.model');
const coinGeckoApi = require('../config/apiConfig');

const fetchAndSaveCryptoData = async () => {
    try {
        // Fetch data from CoinGecko
        const response = await coinGeckoApi.get('/simple/price', {
            params: {
                ids: 'bitcoin,ethereum,matic-network',
                vs_currencies: 'usd',
                include_market_cap: true,
                include_24hr_change: true,

            }
        });

        const CryptoData = new CryptoDataModel(response.data);
        await CryptoData.save();

        return;
    } catch (error) {
        console.error('Error fetching and saving crypto data:', error);
        throw error;
    }
};

module.exports = fetchAndSaveCryptoData;

