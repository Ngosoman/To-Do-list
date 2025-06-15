import React from 'react'
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="/">To-Do App</a>
        </div>
       
      </div>
    </nav>
  );
};

export default Navbar;