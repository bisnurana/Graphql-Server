import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';

const myGraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const PORT = 3000 || process.env.PORT;

const app = express();

// bodyParser is needed just for POST
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT, () => console.log(`Server runnint at port ${PORT}`));
