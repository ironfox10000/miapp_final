import React from 'react';
import { Link } from 'react-router-dom';

const BeatCard = ({ id, title, description, price }) => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-blue-600 font-bold mt-4">{price} CLP</p>
      <Link to={`/beat/${id}`}>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Ver Detalles
        </button>
      </Link>
    </div>
  );
};

export default BeatCard;
