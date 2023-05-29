const { ValidateSignature } = require('../../utils');

module.exports = async (req, res, next) => {
    try {
        const isAuthorized = await ValidateSignature(req);
        if (isAuthorized) {
            return next();
        } else {
            return res.status(403).json({message: 'You are not Authorized'});
        };
    } catch (err) {
        return res.status(400).json({message: 'invalid token'});
    };
};