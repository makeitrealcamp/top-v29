const Task = require('./task.model');

function getAllTask() {
  return Task.find();
}

async function getOneTask(id) {
  const task = await Task.findById(id);

  if (!task) {
    return null;
  }

  return task;
}

async function deleteTask(id) {
  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    return null;
  }

  return task;
}

function createTask(task) {
  return Task.create(task);
}

function updateTask(id, task) {
  return Task.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

module.exports = {
  getAllTask,
  getOneTask,
  deleteTask,
  createTask,
  updateTask,
};
