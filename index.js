import { config } from "dotenv";
config()
import express from 'express';
import rootSchema from './schema.js'
import { graphqlHTTP as expressGraphQL } from 'express-graphql';

const app = express();


app.use('/graphql', expressGraphQL({
    schema: rootSchema,
    graphiql: true
  }))

const PORT =  process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));