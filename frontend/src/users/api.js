// ../frontend/src/users/api.js

import axios from 'axios';

const API_URL = 'https://consultorio-medico-mh5o.onrender.com/api/usuarios';
// const API_URL = 'http://localhost:5000/api/usuarios';

// Función para obtener el token del localStorage
const getToken = () => localStorage.getItem('token');

// Configuración de cabeceras con autenticación
const authConfig = () => {
  const token = getToken();
  return {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}), // Solo incluir si hay token
      'Content-Type': 'application/json'
    }
  };
};

// Función para crear usuario (requiere token)
export const createUser = (user) =>
  axios.post(`${API_URL}/usuarios`, user, authConfig());
