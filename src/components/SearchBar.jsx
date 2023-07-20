import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchTask = () => {
    onSearch(searchText)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearchTask}>Search</button>
    </div>
  );
};

export default SearchBar;
