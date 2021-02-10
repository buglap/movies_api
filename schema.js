import {getAllPopularTV, getAllTopRatedTV, getTVById, getAllTVReviews} from './src/TV/tv_repo.js';
import { getAllMovies, getMovieById, getTrendingMovies, searchMovie } from './src/movies/movies_repo.js';
import {getResquestToken, getGuestSession} from './src/auth/auth_repo.js';
import {getRatedMovies, getAccount} from './src/account/account_repo.js'
import {listTvType, tvType,TVReviewsType} from './src/TV/tv.js';
import {movieListType, searchMovieType, trendingMovieType, movieType } from './src/movies/movies.js';
import {tokenType, guestAuthType} from './src/auth/auth.js';
import {accountType, ratedMoviesType} from './src/account/account.js'
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat, GraphQLBoolean, GraphQLSchema } from 'graphql';


const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: ()=>({
        guestAuth:{
            type: guestAuthType,
            description: 'get guest authentication',
            resolve(){
                return getGuestSession();
            }
        },
        token:{
            type: tokenType,
            description: 'get request token',
            resolve(){
                return getAuthToken();
            }
        },
        tv: {
            type: tvType,
            description:'tv with details',
            args: {
                tv_id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return getTVById(args.tv_id);
            }
        },
        popularTv: {
            type: listTvType,
            description:'list of tv',
            resolve() {
                return getAllPopularTV();
            }
        },
        topRatedTv: {
            type: listTvType,
            description: 'list of top rated tv',
            resolve() {
                return getAllTopRatedTV();
            }
        },
        searchMovies: {
            type: searchMovieType,
            description: 'search movie with a string and filter by adult content',
            args: {
                keyword: { type: GraphQLString },
                include_adult: { type: GraphQLBoolean }
            },
            resolve(parent, args) {
                return searchMovie(args.keyword, args.include_adult);
            }
        },
        movie: {
            type: movieType,
            description:'movie with details',
            args: {
                movie_id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return getMovieById(args.movie_id);
            }
        },
        movies: {
            type: movieListType,
            description:'list of movies',
            resolve() {
                return getAllMovies();
            }
        },
        ratedMovies:{
            type: ratedMoviesType,
            description: 'list of rated movies by an account',
            resolve() {
                return getRatedMovies();
            }
        },
        trendingMovies: {
            type: trendingMovieType,
            description: 'list of trending movies',
            args: {
                media_type: { type: GraphQLString },
                time_window: { type: GraphQLString }
            },
            resolve(parent, args) {
                return getTrendingMovies(args.media_type, args.time_window);
            }
        },
    })
});


const rootSchema = new GraphQLSchema({
    query: RootQueryType
});

export default rootSchema ;