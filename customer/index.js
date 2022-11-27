const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    res.status(200).json({
        "msg":"This is customer service"
    });
});

app.listen(8001, () => {
    console.log("Customer service is listening on port 8001")
});