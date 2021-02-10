import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat, GraphQLBoolean, GraphQLSchema } from 'graphql';

const movieListType = new GraphQLObjectType({
    name: 'MovieList',
    fields: () => ({
        id: { type: GraphQLString },
        item_count: { type: GraphQLInt },
        items: { type: GraphQLList(movieType) }
    })
});

const movieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        vote_average: { type: GraphQLFloat },
        poster_path: { type: GraphQLString },
        overview: { type: GraphQLString },
        release_date: { type: GraphQLString }
    })
});

const trendingMovieType = new GraphQLObjectType({
    name: 'TrendingMovie',
    fields: () => ({
        page: { type: GraphQLInt },
        results: { type: GraphQLList(movieType) }
    })
});

const searchMovieType = new GraphQLObjectType({
    name: 'SearchMovie',
    fields: () => ({
        page: { type: GraphQLInt },
        total_results: { type: GraphQLInt },
        total_pages: { type: GraphQLInt },
        results: { type: GraphQLList(movieType) }
    })
});

export {movieListType, searchMovieType, trendingMovieType, movieType };