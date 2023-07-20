import React, { useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import SearchBar from './components/SearchBar';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Filter tasks based on the search query or reset the tasks to their original state
    if (query.trim() === '') {
      setTasks([]);
    } else {
      const filteredTasks = tasks.filter((task) =>
        task.text.toLowerCase().includes(query.toLowerCase())
      );
      setTasks(filteredTasks);
    }
  };

  const handleReset = () => {
    setSearchQuery('');
    setTasks([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('./assets/image.jpg')]">
      <div className="max-w-md w-full bg-white p-8 shadow-2xl rounded-lg mb-5">
        <div className="flex items-center justify-center mb-4">
          <FaTasks className="text-4xl mr-5" />
          <h1 className="text-3xl font-bold">Task Manager App</h1>
        </div>

        <SearchBar value={searchQuery} onSearch={handleSearch} onReset={handleReset} className="m-4" />

        <AddTaskForm onAddTask={addTask} className="m-4" />

        <TaskList tasks={tasks} onDeleteTask={deleteTask} onUpdateTask={updateTask} />
      </div>
    </div>
  );
}

export default App;
