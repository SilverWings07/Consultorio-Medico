// ../backend/routes/user.js

import express from 'express';
import supabase from './../db.js';
import bcrypt from 'bcryptjs';

import authMiddleware from './../middlewares/auth.js';  // Middleware de autenticación
import roleMiddleware from './../middlewares/role.js';  // Middleware de autorización

const router = express.Router();

router.post('/usuarios', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { correo, contraseña, nombre, fecha_nacimiento, telefono, direccion, rol } = req.body;
  
    // Hash de la contraseña
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

// Obtener todos los usuarios (solo para administradores)
router.get('/usuarios', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { data, error } = await supabase.from('usuario').select('*');

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
});

// Obtener un usuario por ID (requiere autenticación)
router.get('/usuarios/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('usuario').select('*').eq('id', id).single();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    if (!data) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(data);
});

// Actualizar un usuario por ID (solo el usuario mismo o un administrador)
router.put('/usuarios/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;
    const { correo, contraseña, nombre, fecha_nacimiento, telefono, direccion, rol } = req.body;

    // Solo permitir que el usuario se actualice a sí mismo o que un admin lo haga
    if (req.user.id !== parseInt(id) && req.user.rol !== 'admin') {
        return res.status(403).json({ error: 'No tienes permiso para modificar este usuario' });
    }

    const { data, error } = await supabase
        .from('usuario')
        .update({ correo, contraseña, nombre, fecha_nacimiento, telefono, direccion, rol })
        .eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Usuario actualizado', data });
});

// Eliminar un usuario por ID (solo administradores)
router.delete('/usuarios/:id', authMiddleware, roleMiddleware(['admin']), async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase.from('usuario').delete().eq('id', id);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Usuario eliminado', data });
});

export default router;
