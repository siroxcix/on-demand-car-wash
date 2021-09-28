const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

//routes
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const carRoutes = require('./routes/carRoutes');
const profileRoutes= require('./routes/profileRoutes');
const myordersRoutes = require('./routes/myordersRoutes');
const scheduledLater = require('./routes/scheduledLater');
const leaderboard = require('./routes/leaderboard');
const washerRoute = require('./routes/findWashers');
const serviceAddonPromocode = require('./routes/service_addon_promocode');

const app = express();


//Connect to Customers Database
mongoose.connect('mongodb+srv://casestudy:1234Abcd@cluster0.l8if6.mongodb.net/customer?retryWrites=true&w=majority');


//middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use('/uploads/images',express.static('uploads'));
app.use('/',[authRoutes,profileRoutes,orderRoutes,carRoutes,serviceAddonPromocode,myordersRoutes,scheduledLater,leaderboard, washerRoute]);

//Listen to port: Default is 3000
const port = 3000;
app.listen( port , function(){
    console.log("listening to port ",port);
});

module.exports = app;
