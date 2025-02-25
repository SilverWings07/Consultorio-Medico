import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import supabase from './db.js'; // Importar la conexión con Supabase
import loginRoutes from './routes/login.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

// Configurar CORS para permitir solicitudes desde tu frontend en Vercel
app.use(cors({
    origin: function (origin, callback) {
      const allowedOrigins = [
        'https://consultorio-medico-xi.vercel.app',
        'http://localhost:3000'
      ];
  
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // Permitir acceso
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(express.json());

// Rutas
app.use('/api/login', loginRoutes);
app.use('/api/usuarios', userRoutes);

// Ruta de prueba para verificar la conexión con Supabase
app.get("/test-db", async (req, res) => {
    const { data, error } = await supabase.from("usuarios").select("*").limit(1);

    if (error) {
        return res.status(500).json({ error: "❌ Error conectando a Supabase", details: error.message });
    }

    res.json({ message: "✅ Conexión con Supabase exitosa", data });
});

// Definir el puerto correctamente
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
