import { validateJwt } from '../auth/auth.service.js';
import { getFindUsers } from '../graphql/user/user.services.js';

async function context({ req }) {
  let token = null;
  let currentUser = null;

  if (req.headers?.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }

  try {
    if (token) {
      const payload = await validateJwt(token);
      const user = await getFindUsers({ username: payload.id });

      currentUser = user;
    }
  } catch (error) {
    console.log('error', error);
  } finally {
    return {
      currentUser
    };
  }

}

export default context;
