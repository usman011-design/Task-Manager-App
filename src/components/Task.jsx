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
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedText}
            onChange={(e) => setUpdatedText(e.target.value)}
          />
          <button onClick={handleUpdateTask}>Update</button>
        </div>
      ) : (
        <div>
          <span>{task.text}</span>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteTask}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;
