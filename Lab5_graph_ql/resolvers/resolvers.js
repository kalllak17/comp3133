import * as movieService from "../service/movie.service.js";
// Resolvers define the technique for fetching the types defined in the schema.


const rootResolver = {
    Query: {
        getAllMovies: async () => {
            return await movieService.getAllMovies();
        },

        getMovieById: async (_, { _id }) => {
            return await movieService.getMovieById(_id);
        },

        getMovieByDirector: async (_, { director }) => {
            return await movieService.getMovieByDirector(director);
        },
    },

    Mutation: {
        createMovie: async (_, { input }) => {
            return await movieService.createMovie(input);
        },

        updateMovie: async (_, { _id, input }) => {
            return await movieService.updateMovie(_id, input);
        },

        deleteMovie: async (_, { _id }) => {
            return await movieService.deleteMovie(_id);
        },
    },
};

export default rootResolver;