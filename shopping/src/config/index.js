const dotenv = require('dotenv');
dotenv.config();

const PORT= process.env.PORT
const DB_URL= process.env.MONGO_URL
const APP_SECRET= process.env.APP_SECRET
const MSG_QUEUE_HOST= process.env.MSG_QUEUE_HOST
const EXCHANGE_NAME= process.env.EXCHANGE_NAME
const SHOPPING_SERVICE = "shopping_service"

module.exports = {
    PORT: PORT,
    DB_URL: DB_URL,
    APP_SECRET: APP_SECRET,
    MSG_QUEUE_HOST: MSG_QUEUE_HOST,
    EXCHANGE_NAME: EXCHANGE_NAME,
    SHOPPING_SERVICE: SHOPPING_SERVICE
};