import React from 'react';
import BeatCard from './BeatCard';

const Catalogo = () => {
  const beats = [
    { id: 1, title: 'Beat #1', description: 'Un beat con buen ritmo', price: 10 },
    { id: 2, title: 'Beat #2', description: 'Beat estilo trap', price: 20 },
    { id: 3, title: 'Beat #3', description: 'Beat instrumental relajante', price: 30 },
  ];

  return (
    <section className="p-10">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Catálogo de Beats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {beats.map(beat => (
          <BeatCard key={beat.id} id={beat.id} title={beat.title} description={beat.description} price={beat.price} />
        ))}
      </div>
    </section>
  );
};

export default Catalogo;
