import express from 'express';
import supabase from './../db.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Registrar usuario con contraseña hasheada
router.post('/usuarios', async (req, res) => {
    const { correo, contraseña, nombre, fecha_nacimiento, telefono, direccion, rol } = req.body;

    // Hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const contraseñaHasheada = await bcrypt.hash(contraseña, salt);

    const { data, error } = await supabase
        .from('usuario')
        .insert([{ correo, contraseña: contraseñaHasheada, nombre, fecha_nacimiento, telefono, direccion, rol }]);

    if (error) {
        console.error("Error en la consulta SQL:", error);
        return res.status(500).json({ error: error.message });
    }

    res.status(201).json({ message: 'Usuario creado', data });
});

// Obtener todos los usuarios
router.get('/usuarios', async (req, res) => {
    const { data, error } = await supabase.from('usuario').select('*');

    if (error) {
        console.error("Error en la consulta SQL:", error);
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json(data);
});

// Obtener un usuario por ID
router.get('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { data, error } = await supabase.from('usuario').select('*').eq('id', id).single();

    if (error) {
        console.error("Error en la consulta SQL:", error);
        return res.status(500).json({ error: error.message });
    }

    if (!data) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(data);
});

// Actualizar un usuario por ID
router.put('/usuarios/:id', async (req, res) => {
    const { id } = req.params;
    const { correo, contraseña, nombre, fecha_nacimiento, telefono, direccion, rol } = req.body;

    const { data, error } = await supabase
        .from('usuario')
        .update({ correo, contraseña, nombre, fecha_nacimiento, telefono, direccion, rol })
        .eq('id', id);

    if (error) {
        console.error("Error en la consulta SQL:", error);
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Usuario actualizado', data });
});

// Eliminar un usuario por ID
router.delete('/usuarios/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase.from('usuario').delete().eq('id', id);

    if (error) {
        console.error("Error en la consulta SQL:", error);
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Usuario eliminado', data });
});

export default router;