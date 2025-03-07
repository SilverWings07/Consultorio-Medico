// ../backend/middleware/role.js

const roleMiddleware = (rolesPermitidos) => {
    return (req, res, next) => {
      // Verificamos que req.user esté definido (lo establece authMiddleware)
      if (!req.user) {
        return res.status(401).json({ error: 'Usuario no autenticado.' });
      }
      
      if (!rolesPermitidos.includes(req.user.rol)) {
        return res.status(403).json({ error: 'Acceso denegado. No tienes permisos suficientes.' });
      }
      
      next();
    };
};
  
export default roleMiddleware;
  