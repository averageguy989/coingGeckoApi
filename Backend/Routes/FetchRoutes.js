const express = require('express');
const router = express.Router();
const { getCoinData, getCoinDeviation } = require('../controller/coinPrice')


router.get('/stats/:coin', getCoinData);

router.get('/deviation/:coin', getCoinDeviation);

module.exports = router;