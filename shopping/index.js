const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    res.status(200).json({
        "msg":"This is shopping service"
    });
});

app.listen(8003, () => {
    console.log("Shoppinf service is listening on port 8003")
});