import React, { useState } from 'react';

const SearchBar = ({ onSearch , onReset}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTask = () => {
    onSearch(searchText);
  };

  const handleReset = () => {
    setSearchText('');
    onReset();
  }

  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleSearchTask}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
      <button type="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SearchBar;
