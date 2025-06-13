import React from 'react';
import AddTask from '../Components/AddTask.jsx';
import TaskList from '../Components/TaskList.jsx';
import SearchBar from '../Components/SearchBar.jsx';

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