import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch, onReset }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTask = () => {
    onSearch(searchText);
  };

  const handleResetTask = () => {
    setSearchText(''); // Clear the search input
    onReset(); // Call the onReset function passed from the parent component
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
      </div>
      <button
        onClick={handleSearchTask}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
      <button
        onClick={handleResetTask}
        className="px-4 py-2 border-red-600 text-black rounded-md hover:bg-red-600 focus:outline-none"
      >
        Reset
      </button>
    </div>
  );
};

export default SearchBar;
