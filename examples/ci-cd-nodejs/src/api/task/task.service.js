const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    completed: true,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    completed: false,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
    completed: false,
  },
];

function getAllTask() {
  return tasks;
}

function getOneTask(id) {
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return null;
  }

  return task;
}

function deleteTask(id) {
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return null;
  }

  tasks.splice(tasks.indexOf(task), 1);

  return task;
}

function createTask(task) {
  const newTask = task;
  newTask.id = tasks.length + 1;
  newTask.completed = false;

  tasks.push(newTask);

  return newTask;
}

function updateTask(id, task) {
  const findTask = tasks.find((t) => t.id === Number(id));

  if (!findTask) {
    return null;
  }

  let taskToReturn = null;
  tasks.forEach((oldTask) => {
    if (oldTask.id === Number(id)) {
      taskToReturn = {
        ...oldTask,
        ...task,
      };
    }
  });

  return taskToReturn;
}

module.exports = {
  getAllTask,
  getOneTask,
  deleteTask,
  createTask,
  updateTask,
};
