const mongoose = require('mongoose');

const { DB_URL } = require('../config');

module.exports = async() => {
    
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connedted to MongoDB successfully');
        
    } catch (error) {
        console.log('Error happened')
        console.log(error);
        process.exit(1);
    };
};
