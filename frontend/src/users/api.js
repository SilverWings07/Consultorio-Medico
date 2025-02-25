import axios from 'axios';

const API_URL = 'https://consultorio-medico-mh5o.onrender.com/api/usuarios';

// Funciones CRUD para usuarios
export const createUser = (user) => axios.post(`${API_URL}/usuarios`, user);

export const getUser = () => axios.get(`${API_URL}/usuarios`);
export const getUserById = (id) => axios.get(`${API_URL}/usuarios/${id}`);
export const updateUser = (id, paciente) => axios.put(`${API_URL}/usuarios/${id}`, paciente);
export const deleteUser = (id) => axios.delete(`${API_URL}/usuarios/${id}`);
