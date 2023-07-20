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
    <div className='mb-4'>
      <input
  type="text"
  placeholder="Enter task..."
  value={taskText}
  onChange={(e) => setTaskText(e.target.value)}
  required
  className="w-full h-10 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-4"
/>

      <button type='submit' onClick={handleAddTask} className='w-full h-10 px-4 py-2 rounded-md border border-gray-300 text-white hover:bg-gray-600 bg-blue-600'>Add</button>
    </div>
  );
};

export default AddTaskForm;
