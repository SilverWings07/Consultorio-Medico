// ../frontend/src/users/api.js

import axios from 'axios';

// const API_URL = 'https://consultorio-medico-mh5o.onrender.com/api/usuarios';
const API_URL = 'http://localhost:5000/api/usuarios';

// Función para crear usuario
export const createUser = (user) =>
  axios.post(`${API_URL}/usuarios`, user );
