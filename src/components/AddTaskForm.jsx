import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        id: Math.random().toString(36).substr(2, 9),
        text: taskText,
      };
      onAddTask(newTask);
      setTaskText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        required
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTaskForm;
