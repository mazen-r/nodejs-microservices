const { ValidateSignature } = require('../../utils');

module.exports = async (req,res,next) => {
    try {
        const isAuthorized = await ValidateSignature(req);
        if(isAuthorized){
            return next();
        }
        return res.status(403).json({message: 'Not Authorized'})
    } catch (err) {
        return res.status(400).json({message: 'Invalid token'})
    };
};