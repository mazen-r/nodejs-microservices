const dotenv = require('dotenv');
dotenv.config();

const PORT= process.env.PORT
const DB_URL= process.env.MONGODB_URI
const APP_SECRET= process.env.APP_SECRET

module.exports = {
    PORT: PORT,
    DB_URL: DB_URL,
    APP_SECRET: APP_SECRET
};