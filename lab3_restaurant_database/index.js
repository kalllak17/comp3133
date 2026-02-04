const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/RestaurantRoutes');
const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const DB_CONNECTION = '';

mongoose.connect(DB_CONNECTION).then(success => {
    console.log(`Success Mongodb connection`)
}).catch(err => {
    console.log('Error Mongodb connection')
});

app.use(restaurantRoutes);

app.listen(SERVER_PORT, () => { console.log(`Server is running on port ${SERVER_PORT}`) });
