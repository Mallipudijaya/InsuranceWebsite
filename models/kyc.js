const mongoose = require('mongoose')


const kycSchema = new mongoose.Schema({

    CustomerName: {
        type: String,
        required: true
    },
    FatherName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    PhoneNo: {
        type: Number,
        required: true
    },
    

})

module.exports = mongoose.model('Kyc',kycSchema)