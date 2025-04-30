import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, selectedTask, setSelectedTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title,
      description,
      id: selectedTask?.id
    };
    onSubmit(task);
    setTitle('');
    setDescription('');
    setSelectedTask(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedTask ? 'Edit Task' : 'Add Task'}</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{selectedTask ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default TaskForm;
