import express from 'express';
import supabase from './../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

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