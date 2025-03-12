// ../backend/routes/login.js

import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import supabase from '../db.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    // Buscar usuario en la base de datos
    const { data, error } = await supabase
      .from('usuario')
      .select('*')
      .eq('correo', correo)
      .single();

    if (error || !data) {
      return res.status(400).json({ error: 'Correo o contraseña incorrectos.' });
    }

    // Comparar contraseñas
    const validPassword = await bcrypt.compare(contraseña, data.contraseña);
    if (!validPassword) {
      return res.status(400).json({ error: 'Correo o contraseña incorrectos.' });
    }

    // Generar token JWT
    const token = jwt.sign(
      { id: data.id_usuario, rol: data.rol },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    // 👉 Configurar la cookie con HttpOnly y Secure (solo HTTPS)
    res.cookie('token', token, {
      httpOnly: true,                                 // No accesible desde JS del cliente
      secure: process.env.NODE_ENV === 'production',  // Solo en HTTPS en producción
      sameSite: 'Strict',                             // Evita CSRF
      maxAge: 2 * 60 * 60 * 1000                      // Expira en 2 horas
    });

    // Enviar respuesta al frontend
    res.json({ success: true });

  } catch (error) {
    console.error("Error en el login:", error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

export default router;
