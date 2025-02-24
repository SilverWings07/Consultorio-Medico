import express from 'express';
import supabase from './db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

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

// Login de usuario
router.post('/login', async (req, res) => {
    const { correo, contraseña } = req.body;

    // Buscar usuario en la base de datos
    const { data, error } = await supabase.from('usuario').select('*').eq('correo', correo).single();

    if (error || !data) {
        return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
    }

    // Comparar la contraseña ingresada con la almacenada
    const contraseñaValida = await bcrypt.compare(contraseña, data.contraseña);
    if (!contraseñaValida) {
        return res.status(400).json({ error: 'Correo o contraseña incorrectos' });
    }

    // Generar token JWT
    const token = jwt.sign({ id: data.id_usuario, rol: data.rol }, process.env.JWT_SECRET, { expiresIn: '2h' });

    res.status(200).json({ message: 'Login exitoso', token });
});

// Middleware de autenticación
const verificarToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Acceso denegado' });

    try {
        const verificado = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = verificado;
        next();
    } catch (error) {
        res.status(400).json({ error: 'Token inválido' });
    }
};

// Ruta protegida de ejemplo
router.get('/perfil', verificarToken, async (req, res) => {
    const { data, error } = await supabase.from('usuario').select('*').eq('id_usuario', req.usuario.id).single();
    if (error) return res.status(500).json({ error: 'Error obteniendo usuario' });

    res.status(200).json(data);
});

export default router;