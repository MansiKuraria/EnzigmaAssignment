// src/Services/taskService.js

const TASKS_KEY = 'todo-tasks';

export const getTasks = () => {
  const tasks = localStorage.getItem(TASKS_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const addTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);
};

export const updateTask = (updatedTask) => {
  const tasks = getTasks().map(task =>
    task.id === updatedTask.id ? updatedTask : task
  );
  saveTasks(tasks);
};

export const deleteTask = (id) => {
  const tasks = getTasks().filter(task => task.id !== id);
  saveTasks(tasks);
};
