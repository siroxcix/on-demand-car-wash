require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//Importing routes
const servicePlanRoutes = require('./routes/serviceplanRoutes');
const washerRoutes = require('./routes/washerRoutes');
const addonRoutes = require('./routes/addonRoutes');
const leaderboard = require('./routes/leaderboard');
const carRoutes = require('./routes/carRoutes');
const customerRoutes = require('./routes/customerRoute');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

//connect to database
mongoose.connect( 'mongodb+srv://casestudy:1234Abcd@cluster0.l8if6.mongodb.net/admindb?retryWrites=true&w=majority');

//Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/', [authRoutes,servicePlanRoutes,addonRoutes,carRoutes,washerRoutes,leaderboard, customerRoutes, orderRoutes]);
 

//Listen to port : default is 2000
const port = 2000;
app.listen(port,function(){
    console.log("Listening to port:",port);
})


module.exports = app;