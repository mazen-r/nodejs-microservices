const mongoose = require('mognoose');

const Schema = mognoose.Schema;

const AddressSchema = new Schema ({
    street: String,
    postalCode: String,
    city: String,
    country: String
});

module.exports = mongoose.model('address', AddressSchema);