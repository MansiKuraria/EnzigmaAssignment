import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {
  getTasks,
  addTask as saveTask,
  updateTask,
  deleteTask as removeTask
} from './Services/taskService';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState({ id: null, name: '' });

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const addTask = (taskName) => {
    if (currentTask.id !== null) {
      const updated = tasks.map(task =>
        task.id === currentTask.id ? { ...task, name: taskName } : task
      );
      setTasks(updated);
      updateTask({ id: currentTask.id, name: taskName });
      setCurrentTask({ id: null, name: '' });
    } else {
      const newTask = { id: Date.now(), name: taskName };
      const updated = [...tasks, newTask];
      setTasks(updated);
      saveTask(newTask);
    }
  };

  const deleteTask = (id) => {
    const updated = tasks.filter(task => task.id !== id);
    setTasks(updated);
    removeTask(id);
    if (currentTask.id === id) setCurrentTask({ id: null, name: '' });
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  return (
    <div className="container" style={{ maxWidth: '500px', margin: '40px auto' }}>
      <h2>Todo App</h2>
      <TaskForm
        onSubmit={addTask}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
      />
      <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
};

export default App;
