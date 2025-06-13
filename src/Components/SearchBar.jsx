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
        className="w-30px p-2 border border-gray-300 rounded center"
        placeholder="Find task"
      />
    </div>
  );
};

export default SearchBar;