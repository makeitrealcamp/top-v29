import { GraphQLError } from 'graphql';

import { createUser, loginAccount } from './user.services.js';

const query = {
  allUsers: async(parent, args) => {},
  totalUsers: async(parent, args) => {},
  me: async(parent, args, context) => {
    const { currentUser } = context;

    if (!currentUser) {
      throw new GraphQLError('You are not authenticated', {
        extensions: { code: 'UNAUTHENTICATED' },
      });
    }

    return currentUser;
  },
}

const mutation = {
  createAccount: async(parent, { input }) => {
    const user = await createUser(input);
    return user;
  },
  login: async(parent, args) => {
    const { username, password } = args;
    const user = await loginAccount(username, password);
    return user;
  },
}

export default {
  query,
  mutation,
}
