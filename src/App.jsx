import React from 'react';
import { TodoProvider } from './Context/TodoContext.jsx';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import './index.css';

const App = () => {
  return (
    <TodoProvider>
      <Navbar />
      <Home />
    </TodoProvider>
  );
};

export default App;