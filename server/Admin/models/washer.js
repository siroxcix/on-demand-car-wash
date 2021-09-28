const mongoose = require('mongoose');
const { isEmail } = require('validator');

//connecting to the washers database with admin's credentials
const conn= mongoose.createConnection('mongodb+srv://casestudy:1234Abcd@cluster0.l8if6.mongodb.net/washerOrder?retryWrites=true&w=majority');

//creating a washers schema 
const washerSchmema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate:[isEmail,"Please enter a valid email"]
    },
    password:{
        type: String,
        required: [true,'Please enter a password'],
        minlength: [8,'Minimum length is 8 characters']
    },
    isApproved:{
        type: Boolean,
        default:'false'
    }
});

const washer = conn.model('washer',washerSchmema);
const washerDetails = conn.model('washerdetail', new mongoose.Schema({}))
module.exports = {washer, washerDetails};