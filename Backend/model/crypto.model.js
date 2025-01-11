const mongoose = require('mongoose');

const CryptoData = mongoose.Schema({
    "bitcoin": {
        usd: Number,
        usd_market_cap: Number,
        usd_24h_change: Number
    },
    "ethereum": {
        usd: Number,
        usd_market_cap: Number,
        usd_24h_change: Number
    },
    "matic-network": {
        usd: Number,
        usd_market_cap: Number,
        usd_24h_change: Number
    }
}, {
    timestamps: true
});

const CryptoDataModel = mongoose.model('CryptoPrice', CryptoData);

module.exports = CryptoDataModel;
