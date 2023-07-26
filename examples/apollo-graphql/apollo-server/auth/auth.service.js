/**
 * @author: Cristian Moreno Zulauaga <cristian.moreno@makeitreal.camp>
 */

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET = 'MAK3T1TR3AL!**';

 /**
  * Validate JWT
  * @param {String} token
  * @returns
  */
export async function validateJwt(token) {
  try {
    const payload = await jwt.verify(token, SECRET);
    return payload;
  } catch (error) {
    console.log(error)
    throw new Error(error);
  }
}

 /**
  * Returns a jwt token signed by the app secret
  * @param {String} id
  * @returns payload
  */
export function signToken(id) {
  return jwt.sign({ id }, SECRET, {
    expiresIn: 60 * 60 * 24,
  });
}

export function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}
