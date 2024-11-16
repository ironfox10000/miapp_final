import React from 'react';
import Navbar from './components/Navbar';
import Catalogo from './components/Catalogo';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <main className="text-center p-10">
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Bienvenidos a ChileBeats
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            La plataforma chilena para la compra y venta de beats originales de productores locales. Únete hoy y descubre nuestra biblioteca musical.
          </p>
          <a href="#" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
            Explora Beats
          </a>
        </section>

        <Catalogo />
      </main>
    </div>
  );
}

export default App;
