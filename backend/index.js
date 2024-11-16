import express from 'express';
import cors from 'cors';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Configuración de MercadoPago con tu access token
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN // Usar variable de entorno
});

app.post('/create_preference', async (req, res) => {
  const { title, price } = req.body;

  try {
    const preference = new Preference(client);
    
    const preferenceData = {
      items: [
        {
          id: new Date().getTime().toString(),
          title: title,
          description: "Compra de beat musical",
          unit_price: Number(price),
          quantity: 1,
          currency_id: 'CLP',
        }
      ],
      back_urls: {
        success: 'http://localhost:5173/success',
        failure: 'http://localhost:5173/failure',
        pending: 'http://localhost:5173/pending'
      },
      auto_return: 'approved',
      statement_descriptor: 'BEATS STORE',
      external_reference: `BEAT-${new Date().getTime()}`,
      notification_url: "https://your-domain.com/webhook", // Cambiar en producción
    };

    const result = await preference.create({ body: preferenceData });
    
    res.json({
      id: result.id,
      init_point: result.init_point // Cambiar a init_point para producción
    });
  } catch (error) {
    console.error('Error al crear preferencia:', error);
    res.status(500).json({
      error: true,
      message: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});