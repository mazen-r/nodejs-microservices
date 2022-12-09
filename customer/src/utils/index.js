const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { APP_SECRET } = require('../config');

// Util functions

module.exports.GenerateSalt = async() => {
    return await bcrypt.genSalt()
};

module.exports.GeneratePassword = async(password, salt) => {
    return await bcrypt.hash(password, salt)
};

module.exports.ValidatePassword = async (enteredPassword, savedPassword, salt) => {
    return await this.GeneratePassword(enteredPassword, salt) === savedPassword
};

module.exports.GenerateSignature = async (payload) => {
    return await jwt.sign(payload, APP_SECRET, {expiresIn: '1d'})
};

module.exports.ValidateSignature = async (req) => {

    const sginature = req.get('Authorization');

    if (sginature) {
        const payload = await jwt.verify(sginature.split(' ')[1], APP_SECRET)
        req.user = payload
        return true
    } else {
        return false
    };
};

module.exports.FormateData = (data) => {
    if(data) {
        return { data }
    } else {
        throw new Error('Data not found!')
    };
};