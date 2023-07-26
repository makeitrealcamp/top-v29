import { ApolloServer } from '@apollo/server';

import typeDefs from '../graphql/typeDefs.js';
import resolvers from '../graphql/resolvers.js';
import context from '../graphql/context.js';

async function graphqlConfig(httpServer) {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context,
    });

    await server.start();
    console.log('GraphQL server started')

    return server;
  } catch (error) {
    console.log('Error starting GraphQL server', error)
    process.exit(1)
  }
}

export default graphqlConfig;
