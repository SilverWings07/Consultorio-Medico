// ../backend/server.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import rateLimiter from './middlewares/rateLimiter.js';
import errorMiddleware from './middlewares/errorHandler.js';

import loginRoutes from './routes/login.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

// Configuración de CORS para permitir solicitudes desde frontend en Vercel o local
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = [
            'https://consultorio-medico-xi.vercel.app',
            'http://localhost:3000'
        ];
  
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // 👈 Esto permite el intercambio de cookies
}));

// Habilitar el uso de cookies
app.use(cookieParser());

// Usar rateLimiter para prevenir ataques de fuerza bruta
app.use(rateLimiter);

// Usar express.json para procesar solicitudes JSON
app.use(express.json());

app.use('/api/login', loginRoutes);

app.use('/api/usuarios', userRoutes);

// Middleware de manejo de errores (debe ser el último middleware)
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en el puerto ${PORT}`);
});
