import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat, GraphQLBoolean} from 'graphql';
import {movieListType} from '../movies/movies.js';
const accountType = new GraphQLObjectType({
    name: 'AccountList',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        include_adult: { type: GraphQLBoolean },
        username: { type: GraphQLString },
    })
});


const ratedMoviesType = new GraphQLObjectType({
    name: 'ratedMovies',
    fields: () => ({
        id: { type: GraphQLInt},
        results: { type: movieListType },
        page: { type: GraphQLInt },
        total_results: { type: GraphQLInt },
        total_pages: { type: GraphQLInt },
        results: { type: GraphQLList(movieListType) }
    })
});

export {accountType, ratedMoviesType}