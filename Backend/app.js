const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const fetchAndSaveCryptoData = require('./Service/apiService');
const FetchRoute = require('./Routes/FetchRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

setInterval(fetchAndSaveCryptoData,2*60*60*1000);

app.use('/api',FetchRoute);

app.listen(5001,() => {
    console.log("Server is Running on port 5001");
})
