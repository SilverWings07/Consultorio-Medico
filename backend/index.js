import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import routes from './routes.js';
import loginRoutes from './routes/login.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// app.use('/api', routes);
app.use('/api/login', loginRoutes);
app.use('/api/usuarios', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
