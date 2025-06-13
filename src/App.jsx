import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';
import './index.css';

const App = () => {
  return (
    <TodoProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </TodoProvider>
  );
};

export default App;