const mongoose = require('mongoose');


//connecting to the customers database with admin's credentials
const conn= mongoose.createConnection('mongodb+srv://casestudy:1234Abcd@cluster0.l8if6.mongodb.net/customerDetails?retryWrites=true&w=majority');

const customerDetails = conn.model('customerdetail',new mongoose.Schema({}));
const customer = conn.model('customer', new mongoose.Schema({}))


module.exports = {customer,  customerDetails};
