Here's a short document outlining how to fetch data from the API you've implemented in your Node.js application. This document will cover the endpoints available, the parameters required, and example requests.

---

# API Documentation: Fetch Crypto Data

## Overview
This API provides endpoints to fetch cryptocurrency statistics and price deviations for specific coins. It is built using Node.js and Express, and it interacts with a MongoDB database to retrieve the necessary data.

## Base URL
```
http://<your-server-address>/api
```

## Endpoints

### 1. Get Coin Statistics

**Endpoint:**
```
GET /stats/:coin
```

**Description:**
Fetches the latest statistics for a specified cryptocurrency.

**Parameters:**
- `coin` (path parameter): The symbol of the cryptocurrency (e.g., `bitcoin`, `ethereum`).

**Response:**
- **Success (200)**: Returns the latest price, market cap, and 24-hour change for the specified coin.
- **Error (404)**: If the coin is not found in the database.
- **Error (500)**: If there is a server error.

**Example Request:**
```http
GET http://<your-server-address>/api/stats/bitcoin
```

**Example Response:**
```json
{
    "success": true,
    "coinData": {
        "price": 45000,
        "marketCap": 850000000000,
        "24hChange": 2.5
    }
}
```

### 2. Get Price Deviation

**Endpoint:**
```
GET /deviation/:coin
```

**Description:**
Calculates the price deviation of a specified cryptocurrency from its average price over the last 100 entries.

**Parameters:**
- `coin` (path parameter): The symbol of the cryptocurrency (e.g., `bitcoin`, `ethereum`).

**Response:**
- **Success (200)**: Returns the percentage deviation of the current price from the average price.
- **Error (404)**: If the coin is not found in the database or if no valid prices are found.
- **Error (500)**: If there is a server error.

**Example Request:**
```http
GET http://<your-server-address>/api/deviation/bitcoin
```

**Example Response:**
```json
{
    "success": true,
    "deviation": 1.2
}
```

## Notes
- Ensure that the `coin` parameter matches the keys in your database.
- The API is designed to handle errors gracefully, providing meaningful messages in case of issues.

## Conclusion
This API allows users to easily fetch cryptocurrency statistics and price deviations, making it a useful tool for tracking market trends. For further enhancements, consider adding authentication or rate limiting to improve security and performance.

--- 

Feel free to modify the document as needed to fit your specific use case or to add more details!
