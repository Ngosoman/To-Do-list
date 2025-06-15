import React, { useState } from 'react';
import { useTodo } from '../Context/TodoContext.jsx';
import SearchBar from './SearchBar.jsx';

const AddTask = () => {
  const { addTask } = useTodo();
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && date && time) {
      addTask(task, date, time);
      setTask('');
      setDate('');
      setTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="Add a new task"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
};

export default AddTask;