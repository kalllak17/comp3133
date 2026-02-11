const mongoose = require('mongoose');

const emailRegEx = /^\S+@\S+\.\S+$/
const cityRegEx = /^[a-zA-Z\s]+$/
const zipRegEx = /^\d{5}-\d{4}$/
const webRegEx = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
const phoneRegEx = /^1-\d{3}-\d{3}-\d{4}$/

//Create Schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [4, "Name should be at least 4 characters long"],
        maxLength: [100, "Name should be less than 100 characters"]
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please enter a valid email address.'
        ]
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        suite: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
            match: [/^[a-zA-Z\s]*$/, 'City name can only contain letters and spaces']

        },
        zipcode: {
            type: String,
            required: true,
            match: [/^\d{5}-\d{4}$/, 'Please fill a valid zip code in the format 12345-1234']
        },
        geo: {
            lat: {
                type: String,
                required: true,
            },
            lng: {
                type: String,
                required: true,
            }
        }
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, 'Please fill a valid phone number in the format 1-123-123-1234']
    },
    website: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'Please fill a valid URL (http or https)']
    },
    company: {
        name: {
            type: String,
            required: true,
        },
        catchPhrase: {
            type: String,
            required: true,
        },
        bs: {
            type: String,
            required: true,
        }
    },
    createdAt: { 
        type: Date,
        default: Date.now,
        required: true,
    },
    updatedAt: { 
        type: Date,
        default: Date.now,
        required: true,
    },
  });

const User = mongoose.model("User", UserSchema);
module.exports = User;