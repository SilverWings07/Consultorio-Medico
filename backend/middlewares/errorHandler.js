// Middleware para manejo global de errores

const errorMiddleware = (err, req, res, next) => {
    // Si es un error de validación de datos, enviamos un mensaje específico
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }

    // Si es un error de autorización, enviamos un mensaje genérico de acceso denegado
    if (err.name === 'UnauthorizedError') {
        return res.status(403).json({ error: 'Acceso denegado. No autorizado.' });
    }

    // Si es un error de token inválido
    if (err.message && err.message.includes('Token inválido')) {
        return res.status(401).json({ error: 'Token no válido o expirado.' });
    }

    // Para cualquier otro tipo de error
    console.error(err); // Log de errores para el servidor
    res.status(500).json({ error: 'Error interno del servidor. Por favor intente más tarde.' });
};

export default errorMiddleware;
