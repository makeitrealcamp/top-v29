import bookResolvers from './book/book.resolvers.js';
import userReolvers from './user/user.resolvers.js';

const resolvers = {
  Query: {
    helloWorld: () => 'Hello world!',
    ...bookResolvers.query,
    ...userReolvers.query,
  },

  Mutation: {
    ...bookResolvers.mutation,
    ...userReolvers.mutation,
  },
}

export default resolvers;
