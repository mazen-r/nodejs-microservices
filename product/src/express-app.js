const express = require('express');
const cors  = require('cors');
const { products, appEvents  } = require('./api');
const HandleErrors = require('./utils/error-handler')
const { CreateChannel } = require('./utils')

module.exports = async (app) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    const channel = await CreateChannel()
   
    products(app, channel);
};