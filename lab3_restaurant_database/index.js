const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/RestaurantRoutes');
const SERVER_PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

const DB_CONNECTION = 'mongodb+srv://kalllak17_db_user:ceQqsZVn3R1bOdNg@cluster0.odzckbh.mongodb.net/comp3133_lab04?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DB_CONNECTION).then(success => {
    console.log(`Success Mongodb connection`)
}).catch(err => {
    console.log('Error Mongodb connection')
});

app.use(restaurantRoutes);

app.listen(SERVER_PORT, () => { console.log(`Server is running on port ${SERVER_PORT}`) });
