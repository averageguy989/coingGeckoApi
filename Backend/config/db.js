const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch(error) {
        console.error("Error in Mongo DB connection", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;