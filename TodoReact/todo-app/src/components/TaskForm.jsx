import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, currentTask, setCurrentTask }) => {
  const [taskName, setTaskName] = useState('');

  useEffect(() => {
    setTaskName(currentTask.name || '');
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onSubmit(taskName.trim());
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        style={{ width: '70%', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>
        {currentTask.id ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default TaskForm;
