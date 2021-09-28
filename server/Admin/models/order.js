const mongoose = require('mongoose');

//connecting to the customers database with admin's credentials
const conn= mongoose.createConnection('mongodb+srv://casestudy:1234Abcd@cluster0.l8if6.mongodb.net/orders?retryWrites=true&w=majority');
const order = conn.model('order', new mongoose.Schema({}))

module.exports = order;