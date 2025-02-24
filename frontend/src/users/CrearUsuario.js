import React, { useState } from "react";
import { offset, useFloating } from "@floating-ui/react";
import { createUser } from "./api";
import './ventanaFlotante.css';

const CrearUsuario = () => {
    const [formData, setFormData] = useState({
        correo: '',
        contraseña: '',
        nombre: '',
        fecha_nacimiento: '',
        telefono: '',
        direccion: '',
        rol: ''
    });

    const [openForm, setOpenForm] = useState(false);
    const { reference, floating } = useFloating({
        placement: 'bottom-start',
        middleware: [offset(8)],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación básica
        if (!formData.correo || !formData.contraseña || !formData.nombre) {
            alert("Por favor, completa los campos obligatorios.");
            return;
        }

        createUser(formData)
            .then(response => {
                alert("Usuario creado exitosamente");
                setFormData({
                    correo: '',
                    contraseña: '',
                    nombre: '',
                    fecha_nacimiento: '',
                    telefono: '',
                    direccion: '',
                    rol: ''
                });
                setOpenForm(false);
            })
            .catch(err => console.error("Error al crear usuario:", err));
    };

    return (
        <div>
            <button ref={reference} onClick={() => setOpenForm(true)}>Crear Usuario</button>

            {openForm && (
                <div ref={floating} className="Ventana-flotante">
                    <h3>Registrar Nuevo Usuario</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="Contenido-ventana">
                            <div className="Row">
                                <label>Correo:</label>
                                <input
                                    type="email"
                                    placeholder="correo@example.com"
                                    value={formData.correo}
                                    onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                                    required
                                />

                                <label>Contraseña:</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    value={formData.contraseña}
                                    onChange={(e) => setFormData({ ...formData, contraseña: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="Row">
                                <label>Nombre:</label>
                                <input
                                    type="text"
                                    placeholder="Nombre completo"
                                    value={formData.nombre}
                                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                    required
                                />

                                <label>Fecha de Nacimiento:</label>
                                <input
                                    type="date"
                                    value={formData.fecha_nacimiento}
                                    onChange={(e) => setFormData({ ...formData, fecha_nacimiento: e.target.value })}
                                />
                            </div>

                            <div className="Row">
                                <label>Teléfono:</label>
                                <input
                                    type="tel"
                                    placeholder="Ej. 3312345678"
                                    value={formData.telefono}
                                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                                />

                                <label>Dirección:</label>
                                <input
                                    type="text"
                                    placeholder="Dirección"
                                    value={formData.direccion}
                                    onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                                />
                            </div>

                            <div className="Last-row">
                                <label>Rol:</label>
                                <select
                                    value={formData.rol}
                                    onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                                >
                                    <option value="">Seleccione un rol</option>
                                    <option value="paciente">Paciente</option>
                                    <option value="admin">Administrador</option>
                                </select>
                            </div>

                            <button type="submit">Crear</button>
                            <button type="button" onClick={() => setOpenForm(false)}>Cancelar</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default CrearUsuario;
