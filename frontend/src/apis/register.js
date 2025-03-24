// ../frontend/src/apis/register.js

import axios from 'axios';

// const API_URL = 'https://consultorio-medico-mh5o.onrender.com/api/usuarios';
const API_URL = 'http://localhost:5000/api/register';

// Función para crear usuario
export const createUser = (user) =>
  axios.post(`${API_URL}/register`, user );
