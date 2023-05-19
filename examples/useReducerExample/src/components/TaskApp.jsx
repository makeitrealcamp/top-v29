import { useReducer } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

function reducer(tasks, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TASK': {
      const newTask = {
        id: payload.id,
        text: payload.text,
        done: false,
      }
      return [...tasks, newTask];
    }
    case 'UPDATE_TASK': {
      const task = payload;
      return tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    }
    case 'DELETE_TASK': {
      const taskId = payload;
      return tasks.filter((t) => t.id !== taskId)
    }

    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}

function TaskApp() {
  const [tasks, dispatch] = useReducer(reducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        id: nextId++,
        text,
      }
    })
  }

  const handleChangeTask = (task) => {
    dispatch({
      type: 'UPDATE_TASK',
      payload: task,
    })
  }

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: taskId,
    })
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];


export default TaskApp;
