import React from 'react';
import { useTodo } from '../Context/TodoContext.jsx';
const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useTodo();

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Search tasks"
      />
    </div>
  );
};

export default SearchBar;