
const CryptoData = require('../model/crypto.model');

const getCoinData = async (req,res) => {

    try {

        const {coin} = req.params;

        const response = await CryptoData.find().sort({_id:-1}).limit(1);
        if (response.length === 0) {
            return res.status(404).json({ success: false, message: 'Coin not found' });
        }

        const coinData = {
            price: response[0][coin].usd,
            marketCap: response[0][coin].usd_market_cap,
            "24hChange": response[0][coin].usd_24h_change
        }

        return res.status(200).json({ sucess: true, coinData });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error'})
    }
};

const getCoinDeviation = async (req, res) => {
    try {
        const { coin } = req.params;
        const response = await CryptoData.find().sort({_id: -1}).limit(100);

        if (response.length === 0) {
            return res.status(404).json({ success: false, message: 'Coin not found' });
        }

        const prices = response.map(entry => entry[coin].usd);
        const averagePrice = prices.reduce((acc, price) => acc + price, 0) / prices.length;
        const currentPrice = prices[0];
        const deviation = ((currentPrice - averagePrice) / averagePrice) * 100;
       
        return res.status(200).json({ success: true, deviation });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
}

module.exports = {
    getCoinData,
    getCoinDeviation
}
