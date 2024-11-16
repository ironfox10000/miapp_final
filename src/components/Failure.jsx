import React from 'react';

const Failure = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-red-600">Pago Fallido</h1>
      <p className="mt-4">Lo sentimos, hubo un problema con tu transacción. Por favor, inténtalo de nuevo.</p>
    </div>
  );
};

export default Failure;
