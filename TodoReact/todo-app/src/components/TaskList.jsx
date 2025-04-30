import React from 'react';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map(task => (
        <li key={task.id} style={{ marginBottom: '10px' }}>
          {task.name}
          <button onClick={() => onEdit(task)} style={{ marginLeft: '10px' }}>Edit</button>
          <button onClick={() => onDelete(task.id)} style={{ marginLeft: '5px' }}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
