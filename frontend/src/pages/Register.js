// ./frontend/src/pages/Register.js

import React, { useState } from "react";
import { createUser } from "./../apis/register";
import { RegistroContainer, Title, RegistroForm, FormGroup, Label, Input, Select, ButtonGroup, BtnPrimary } from "./../components/register.js";

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
        <RegistroContainer>
            <Title>Registro de Usuario</Title>
            <RegistroForm onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Correo:</Label>
                    <Input
                        type="email"
                        placeholder="correo@example.com"
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Contraseña:</Label>
                    <Input
                        type="password"
                        placeholder="••••••••"
                        value={formData.contraseña}
                        onChange={(e) => setFormData({ ...formData, contraseña: e.target.value })}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Nombre:</Label>
                    <Input
                        type="text"
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Fecha de Nacimiento:</Label>
                    <Input
                        type="date"
                        value={formData.fecha_nacimiento}
                        onChange={(e) => setFormData({ ...formData, fecha_nacimiento: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Teléfono:</Label>
                    <Input
                        type="tel"
                        placeholder="Ej. 3312345678"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Dirección:</Label>
                    <Input
                        type="text"
                        placeholder="Dirección"
                        value={formData.direccion}
                        onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Rol:</Label>
                    <Select
                        value={formData.rol}
                        onChange={(e) => setFormData({ ...formData, rol: e.target.value })}
                    >
                        <option value="">Seleccione un rol</option>
                        <option value="paciente">Paciente</option>
                    </Select>
                </FormGroup>

                <ButtonGroup>
                    <BtnPrimary type="submit">Crear</BtnPrimary>
                </ButtonGroup>
            </RegistroForm>
        </RegistroContainer>
    );
};

export default CrearUsuario;
