const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    res.status(200).json({
        "msg":"This is product service"
    });
});

app.listen(8002, () => {
    console.log("product service is listening on port 8002")
});