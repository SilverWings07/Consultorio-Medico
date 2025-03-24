// ../backend/routes/register.js

import bcrypt from 'bcryptjs';
import express from 'express';
import supabase from './../db.js';

const router = express.Router();

router.post('/usuarios', async (req, res) => {
    const { correo, contraseña, nombre, fecha_nacimiento, telefono, direccion, rol } = req.body;
  
    // Hashear contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contraseña, salt);
  
    // Insertar el nuevo usuario en la base de datos
    const { data, error } = await supabase
      .from('usuario')
      .insert([{ correo, contraseña: hashedPassword, nombre, fecha_nacimiento, telefono, direccion, rol }]);
  
    if (error) {
      return res.status(500).json({ error: 'Error al crear usuario.' });
    }
  
    res.status(201).json({ message: 'Usuario creado', data });
});

export default router;