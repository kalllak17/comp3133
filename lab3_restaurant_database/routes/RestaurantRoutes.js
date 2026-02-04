const express = require('express');
const restaurantModel = require('../models/RestaurantSchema');
const app = express();


//http://localhost:3000/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/:cuisine_name', async (req, res) => {
    try {
        const {cuisine_name} = req.params;

        if (!cuisine_name) {
            return res.status(400).json({
                status: false,
                message: "Cuisine name is required"
            });
        }

        const restaurants = await restaurantModel.findByCuisine(cuisine_name);

        return res.status(200).json(restaurants);
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err.message
        });
    }
});

//http://localhost:3000/restaurants?sortBy=ASC
app.get('/restaurants/restaurant_id', async (req, res) => {
    try {
        const {sortBy} = req.query;

        if (!sortBy) {
            return res.status(400).json({
                status: false,
                message: "Sort order is required"
            });
        }
        const restaurants = await restaurantModel.findAllSorted(sortBy);
        return res.status(200).json(restaurants);
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err.message
        });
    }
});

//http://localhost:3000/restaurants/Delicatessen
app.get('/restaurants/:cuisine_name', async (req, res) => {
    try {
        const {cuisine_name} = req.params;

        if (!cuisine_name) {
            return res.status(400).json({
                status: false,
                message: "Cuisine name is required"
            });
        }

        const restaurants = await restaurantModel.findAllExcludingCity(cuisine_name);
        return res.status(200).json(restaurants);

    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err.message
        });
    }


});


app.post('/restaurant', async (req, res) => {
    try {
        const { cuisines, name, city, restaurant_id } = req.body;


        if (!cuisines || !name || !city || !restaurant_id) {
            return res.status(400).json({
                status: false,
                message: "All fields (cuisines, name, city, restaurant_id) are required"
            });
        }

        const newRestaurant = new restaurantModel({
            cuisines: cuisines.toLowerCase().trim(),
            name: name.toLowerCase().trim(),
            city: city.toLowerCase().trim(),
            restaurant_id
        });


        const savedRestaurant = await newRestaurant.save();

        return res.status(201).json({
            status: true,
            message: "Restaurant added successfully",
            data: savedRestaurant
        });

    } catch (err) {

        return res.status(500).json({
            status: false,
            message: err.message
        });
    }
});

//http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) => {
    const restaurants = await restaurantModel.find({});

    try {
        res.status(200).send(restaurants);
    } catch (err) {
        return res.status(500).json({
            status: false,
            message: err.message
        });
    }
});


module.exports = app