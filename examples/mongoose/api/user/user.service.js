const User = require('./user.model');

function getAll() {
  return User.find();
}

function getById(id) {
  return User.findById(id);
}

function create(data) {
  return User.create(data);
}

function update(id, data) {
  return User.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

function remove(id) {
  return User.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
