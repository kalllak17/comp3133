const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({

    cuisines: {
        type: String,
        required: true,
        minLength: [3, "Name should be longer than 2 characters"],
        lowercase: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minLength: [3, "Name should be longer than 2 characters"],
        lowercase: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        minLength: [2, "Name should be longer than 1 characters"],
        lowercase: true,
        trim: true
    },
    restaurant_id: {
        type: Number,
        required: true,
        min: [1, "restaurant_id should be positive number"],
        max: [999999, "restaurant_id should be at most 999999"],
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    }
});


RestaurantSchema.statics.findByCuisine = function (cuisine) {
    return this.find({
        cuisines: cuisine.toLowerCase()
    }).sort({name: 1});
};

RestaurantSchema.statics.findAllSorted = function(sortOrder = "ASC") {
    const order = sortOrder.toUpperCase() === "DESC" ? -1 : 1;

    return this.find(
        {},
        {
            _id: 1,
            cuisines: 1,
            name: 1,
            city: 1,
            restaurant_id: 1
        }
    ).sort({ restaurant_id: order });
};

RestaurantSchema.statics.findAllExcludingCity = function(
    cuisine,
    city = 'Brooklyn'
) {

    return this.find(
        {
            cuisines: cuisine.toLowerCase(),
            city: { $ne: city.toLowerCase() }
        },
        {
            cuisines: 1,
            name: 1,
            city: 1,
        }
    ).sort({name: 1});
}

const Restaurant = mongoose.model("RestaurantSchema", RestaurantSchema);
module.exports = Restaurant;