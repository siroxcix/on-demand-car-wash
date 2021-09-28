const mongoose = require('mongoose');

//Connect to admin db to read data
const conn =mongoose.createConnection('mongodb+srv://casestudy:1234Abcd@cluster0.l8if6.mongodb.net/admindb?retryWrites=true&w=majority');

//Connect to washers db to read details : to find nearby washers
const con = mongoose.createConnection('mongodb+srv://casestudy:1234Abcd@cluster0.l8if6.mongodb.net/washerOrder?retryWrites=true&w=majority');


//from admin db
const car = conn.model('car', new mongoose.Schema({}));
const addon = conn.model('addon',new mongoose.Schema({}));
const servicePlan = conn.model('servicePlan',new mongoose.Schema({}));

//from washer details collection
const washerDetails = con.model('washerdetail',new mongoose.Schema({}))

module.exports = { car,addon,servicePlan, washerDetails};