import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat, GraphQLBoolean} from 'graphql';

const tokenType = new GraphQLObjectType({
    name: 'TokenList',
    fields: () => ({
        success: { type: GraphQLBoolean },
        expires_at: { type: GraphQLString },
        request_token: { type: GraphQLString },
    })
});

const guestType = new GraphQLObjectType({
    name: 'guest',
    fields: () => ({
        success: { type: GraphQLBoolean },
        guest_session_id: { type: GraphQLString },
        expires_at: { type: GraphQLString },
    })
});

const sessionIdType = new GraphQLObjectType({
    name: 'guestAuth',
    fields: () => ({
        success: { type: GraphQLBoolean },
        session_id: { type: GraphQLString },
    })
});

export {tokenType, guestType, sessionIdType};