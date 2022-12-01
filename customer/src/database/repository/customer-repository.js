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

}