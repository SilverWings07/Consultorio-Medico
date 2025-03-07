

const validarRegistroUsuario = (req, res, next) => {
    const { correo, contraseña, nombre, fecha_nacimiento, telefono, direccion, rol } = req.body;

    // Validar datos obligatorios
    if (!correo || !contraseña || !nombre || !rol) {
        return res.status(400).json({ error: 'Faltan campos obligatorios.' });
    }

    // Validar email con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        return res.status(400).json({ error: 'Formato de correo electrónico inválido.' });
    }

    // Validar longitud de contraseña
    if (contraseña.length < 6) {
        return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres.' });
    }

    // Validar formato de fecha (YYYY-MM-DD)
    if (fecha_nacimiento && !/^\d{4}-\d{2}-\d{2}$/.test(fecha_nacimiento)) {
        return res.status(400).json({ error: 'Formato de fecha inválido. Usa YYYY-MM-DD.' });
    }

    // Validar rol
    const rolesPermitidos = ['admin', 'doctor', 'secretaria', 'paciente'];
    if (!rolesPermitidos.includes(rol)) {
        return res.status(400).json({ error: 'Rol inválido.' });
    }

    next();
};

export default validarRegistroUsuario;
