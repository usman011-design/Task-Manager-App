import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import SearchBar from './components/SearchBar';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  };

  const handleSearch = (searchQuery) => {
    // Filter tasks based on the searchQuery
    const filteredTasks = tasks.filter((task) =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the filtered tasks list
    setTasks(filteredTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <AddTaskForm onAddTask={addTask} />
      <SearchBar onSearch={handleSearch}/>
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
    </div>
  );
}

export default App;
