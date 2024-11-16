import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ChileBeats</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
          <li><a href="#" className="hover:text-gray-300">Catálogo</a></li>
          <li><a href="#" className="hover:text-gray-300">Contacto</a></li>
          <li><a href="#" className="hover:text-gray-300">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
