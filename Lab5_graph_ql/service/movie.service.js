// const Movie = require("../models/Movie.js")
import Movie from "../models/Movie.js"
import { GraphQLError } from "graphql";



export const getAllMovies = async () => {

    try {
        return await Movie.find({});
    } catch (e) {
        throw new GraphQLError(e.message);
    }

}

export const getMovieById = async (id) => {
    try {
        return await Movie.findById(id);
    } catch (e) {
        throw new GraphQLError(e.message);
    }
}

export const getMovieByDirector = async (director) => {
    try {
        return await Movie.findByDirector(director);
    } catch (e) {
        throw new GraphQLError(e.message);
    }
}

export const createMovie = async (input) => {
    try {
        const {name, director_name, production_house, release_date, rating,} = input;
        const newMovie = new Movie({
            name,
            director_name,
            production_house,
            release_date,
            rating,
        })
        await newMovie.save();
        return newMovie;
    } catch (e) {
        throw new GraphQLError(e.message);
    }
}

export const updateMovie = async (id, input) => {
    try {
        const {name, director_name, production_house, release_date, rating,} = input;
        const currentMovie = await Movie.findById(id);

        if (!currentMovie) {
            throw new GraphQLError("Movie not found");
        }

        currentMovie.name = name;
        currentMovie.director_name = director_name;
        currentMovie.production_house = production_house;
        currentMovie.release_date = release_date;
        currentMovie.rating = rating;

        await currentMovie.save();
        return currentMovie;
    } catch (e) {
        throw new GraphQLError(e.message);
    }
}

export const deleteMovie = async (id) => {
    try {
        await Movie.findByIdAndDelete(id);
        return true;
    } catch (e) {
        throw new GraphQLError(e.message);
    }
}