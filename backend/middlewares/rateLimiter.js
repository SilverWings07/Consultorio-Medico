import rateLimit from 'express-rate-limit';

// Configuración de la limitación de solicitudes
const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,   // 15 minutos
    max: 100,                   // Limitar a 100 solicitudes por IP
    message: 'Demasiadas solicitudes desde esta IP, por favor intente nuevamente en 15 minutos.',
    headers: true,              // Incluir encabezados con información sobre la tasa de solicitudes
});

export default rateLimiter;
