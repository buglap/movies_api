import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat, GraphQLBoolean} from 'graphql';

const listTvType  = new GraphQLObjectType({
    name: 'TVList',
    fields: () => ({
        page: { type: GraphQLInt },
        results: { type: GraphQLList(tvType) },
        total_pages: { type: GraphQLInt },
        total_results: { type: GraphQLInt },
    })
});

const tvType = new GraphQLObjectType({
    name: 'TV',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        profile_path: { type: GraphQLString },
        status: { type: GraphQLString },
        type: { type: GraphQLString },
        vote_average: { type: GraphQLFloat},
        vote_count: { type: GraphQLInt },
        popularity: { type: GraphQLFloat }
    })
});


const TVReviewsType = new GraphQLObjectType({
    name: 'SearchMovie',
    fields: () => ({
        id: { type: GraphQLInt },
        total_results: { type: GraphQLInt },
        page: { type: GraphQLInt },
        results: { type: GraphQLList(tvType) },
        total_pages: { type: GraphQLInt }
    })
});


export {listTvType, tvType,TVReviewsType};