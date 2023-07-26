import User from './user.model.js';

import { signToken } from '../../auth/auth.service.js';

export async function getAllUsers() {
  return await User.find();
}

export async function getFindUsers(query) {
  return await User.findOne(query);
}

export async function getUserById(id) {
  return await User.findById(id);
}

export async function createUser(user) {
  return await User.create(user);
}

export async function updateUser(id, user) {
  return await User.findByIdAndUpdate(id, user, { new: true });
}

export async function deleteUser(id) {
  return await User.findByIdAndDelete(id);
}

export async function getTotalUsers(query) {
  return await User.find(query).countDocuments();
}

export async function loginAccount(username, password) {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error('Invalid password');
  }

  const token = signToken(user.username);

  return {
    token,
    user,
  }
}
