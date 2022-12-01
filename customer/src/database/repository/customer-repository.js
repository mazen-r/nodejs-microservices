const {CustomerModel, AddressModel} = require('../models');
const { APIError, BadRequestError, STATUS_CODES } = require('../../utils/app-errors');

// Dealing with data operations
class CustomerRepository {

    async CreateCustomer ({ email, password, phone, salt}) {
        try {
            const customer = new CustomerModel ({
                email,
                password,
                salt,
                phone,
                address: []
            })
            const customerResult = await customer.save()
            return customerResult;
        } catch (error) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to create customer')
        }
    };

    async createAddress ({ _id, street, postalCode, city, country}) {
        try {
            const profile = await CustomerModel.findById(_id);
            if (profile) {
                const newAddress = new AddressModel ({
                    street,
                    postalCode,
                    city,
                    country
                })
                await newAddress.save();
                profile.address.push(newAddress);
            }
            return await profile.save();
        } catch (error) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to find customer')
        }
    };

    async FindCustomer({ email }) {
        try {
            const existingCustomer = await CustomerModel.findOne({ email: email });
            return existingCustomer;
        } catch (error) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to find customer')
        }
    };

    async FindCustomerById({ id }) {
        try {
            const existingCustomer = await CustomerModel.findById(id).populate('address')
            return existingCustomer;
        } catch (error) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to find customer')
        }
    };

    
}