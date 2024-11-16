import React, { useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Reemplaza esto con tu clave pública de Mercado Pago
const publicKey = 'tu-clave-publica-de-mercado-pago';

const MercadoPagoContainer = ({ amount }) => {
  useEffect(() => {
    initMercadoPago(publicKey);
  }, []);

  return (
    <div>
      <Wallet initialization={{ preferenceId: 'tu-preference-id', amount }} />
    </div>
  );
};

export default MercadoPagoContainer;
