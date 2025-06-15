import React from 'react';
import AddTask from '../Components/AddTask';
import TaskList from '../Components/TaskList';
import SearchBar from '../Components/SearchBar';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <SearchBar />
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;