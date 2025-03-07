// ../backend/middleware/auth.js

import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado. No hay token.' });
  }

  try {
    // Si el token tiene el prefijo "Bearer ", lo eliminamos
    const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token;
    const decoded = jwt.verify(cleanToken, process.env.JWT_SECRET);

    req.user = decoded;  // Ejemplo: { id: ..., rol: ... }
    console.log("Usuario autenticado:", req.user);

    next();
  } catch (err) {
    console.error("Error en authMiddleware:", err);
    
    return res.status(401).json({ error: 'Token no válido.' });
  }
};

export default authMiddleware;
