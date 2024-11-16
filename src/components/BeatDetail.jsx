import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Inicializa MercadoPago con tu public key
initMercadoPago('APP_USR-ab83197a-ce95-45ec-862b-d98549d23eb5', {
  locale: 'es-CL'
});

const BeatDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const [error, setError] = useState(null);

  const beat = {
    id,
    title: `Beat #${id}`,
    description: 'Este es un beat con un ritmo genial y buenas vibras.',
    price: 10,
  };

  const handlePayment = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/create_preference', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: beat.title,
          price: beat.price,
        }),
      });

      if (!response.ok) {
        throw new Error('Error al crear la preferencia de pago');
      }

      const data = await response.json();
      setPreferenceId(data.id);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-blue-600">{beat.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{beat.description}</p>
      <p className="text-blue-600 font-bold mt-4">Precio: {beat.price} CLP</p>
      
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {!preferenceId ? (
        <button
          onClick={handlePayment}
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
          disabled={loading}
        >
          {loading ? 'Procesando...' : 'Comprar'}
        </button>
      ) : (
        <div className="mt-6">
          <Wallet
            initialization={{ preferenceId }}
            customization={{
              texts: {
                action: 'buy',
                message: 'Pagar con Mercado Pago'
              },
              visual: {
                hideValue: false,
                buttonBackground: 'blue',
                borderRadius: '6px'
              },
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BeatDetail;