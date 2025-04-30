import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from './Services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const loadTasks = () => {
    getTasks()
      .then((res) => setTasks(res.data))
      .catch((err) => console.error('Error fetching tasks:', err));
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSubmit = (task) => {
    if (task.id) {
      updateTask(task.id, task).then(() => loadTasks());
    } else {
      addTask(task).then(() => loadTasks());
    }
  };

  const handleDelete = (id) => {
    deleteTask(id).then(() => loadTasks());
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TaskForm
        onSubmit={handleSubmit}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
      />
      <TaskList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
