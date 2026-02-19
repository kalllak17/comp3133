

const gqlSchema = (`
    
    
    # Schemas
    type Movie{
        _id: ID,
        name: String!,
        director_name: String!,
        production_house: String!,
        release_date: String!,
        rating: Float!
    }
    
    # Inputs
    
    input MovieInput {
        name: String!,
        director_name: String!,
        production_house: String!,
        release_date: String!,
        rating: Float!
    }
    
    # Root
    
    type Query{
        getAllMovies : [Movie]
        getMovieById(_id: ID!): Movie!
        getMovieByDirector(director: String!): [Movie]
    }
    
    type Mutation{
        createMovie(input: MovieInput!): Movie!
        updateMovie(_id: ID!, input: MovieInput!): Movie!
        deleteMovie(_id: ID!): Boolean
    }
    
    
`);

export default gqlSchema;