import React, { useState } from 'react';

const Task = ({ task, onDeleteTask, onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(task.text);

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateTask = () => {
    onUpdateTask(task.id, { ...task, text: updatedText });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md">
      {isEditing ? (
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
            className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleUpdateTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Update
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between w-full">
          <span className="text-lg font-semibold">{task.text}</span>
          <div className="space-x-2">
            <button
              onClick={handleEditClick}
              className="px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteTask}
              className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
