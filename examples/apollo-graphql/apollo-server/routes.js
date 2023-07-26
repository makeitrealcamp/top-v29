import { expressMiddleware } from '@apollo/server/express4'

import helloworld from './api/helloworld/index.js';


function routesConfig(app, apolloServer) {
  // Rest API
  app.use('/api/helloworld', helloworld);

  // GraphQL
  app.use('/graphql', expressMiddleware(apolloServer));
}

export default routesConfig;
