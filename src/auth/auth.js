import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat, GraphQLBoolean} from 'graphql';

const tokenType = new GraphQLObjectType({
    name: 'TokenList',
    fields: () => ({
        success: { type: GraphQLBoolean },
        expires_at: { type: GraphQLString },
        request_token: { type: GraphQLString },
    })
});

const guestAuthType = new GraphQLObjectType({
    name: 'guestAuth',
    fields: () => ({
        success: { type: GraphQLBoolean },
        guest_session_id: { type: GraphQLString },
        expires_at: { type: GraphQLString },
    })
});


export {tokenType, guestAuthType};