const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

let companySchema = new mongoose.Schema({
    name :{
        type: String,
        required: [true, 'Company Name is required']
    },
    currentSales : {
        type: Number,
        required: [true, 'Current Sales is required']
    },
    targetSales : {
        type: Number,
        required: [true, 'Target Sales is required']
    },
    categoryID : {
        type : Number
    },
    progressPer : {
        type: Number
    },
    barColor : {
        type : String
    },
    categoryName : {
        type : String
    },
    progressLabel : {
        type : String
    }
});

let companyModel = mongoose.model('company', companySchema);
module.exports = companyModel;