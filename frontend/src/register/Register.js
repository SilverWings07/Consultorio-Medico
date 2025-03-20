// ./frontend/src/register/Register.js

import React, { useState } from "react";
import { createUser } from "./api";
import "./styles.css";

const CrearUsuario = () => {
    const [formData, setFormData] = useState({
        correo: "",
        contraseña: "",
        nombre: "",
        fecha_nacimiento: "",
        telefono: "",
        direccion: "",
        rol: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.correo || !formData.contraseña || !formData.nombre) {
            alert("Por favor, completa los campos obligatorios.");
            return;
        }

        createUser(formData)
            .then(() => {
                alert("Usuario creado exitosamente");
                setFormData({
                    correo: "",
                    contraseña: "",
                    nombre: "",
                    fecha_nacimiento: "",
                    telefono: "",
                    direccion: "",
                    rol: ""
                });
            })
            .catch((err) => console.error("Error al crear usuario:", err));
    };

    return (
        <div className="registro-container">
            <h2>Registrar Nuevo Usuario</h2>
            <form onSubmit={handleSubmit} className="registro-form">
                <div className="form-group">
                    <label>Correo:</label>
                    <input
                        type="email"
                        placeholder="correo@example.com"
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        value={formData.contraseña}
                        onChange={(e) => setFormData({ ...formData, contraseña: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Nombre:</label>
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Fecha de Nacimiento:</label>
                    <input
                        type="date"
                        value={formData.fecha_nacimiento}
                        onChange={(e) => setFormData({ ...formData, fecha_nacimiento: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Teléfono:</label>
                    <input
                        type="tel"
                        placeholder="Ej. 3312345678"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Dirección:</label>
                    <input
                        type="text"
                        placeholder="Dirección"
                        value={formData.direccion}
                        onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label>Rol:</label>
                    <select
                        value={formData.rol}
                        onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                    >
                        <option value="">Seleccione un rol</option>
                        <option value="paciente">Paciente</option>
                    </select>
                </div>

                <div className="button-group">
                    <button type="submit" className="btn-primary">Crear</button>
                </div>
            </form>
        </div>
    );
};

export default CrearUsuario;
