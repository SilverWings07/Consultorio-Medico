// ../frontend/src/login/login.js

import { useState } from "react";
import { login } from "./api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(correo, contraseña);
      
      // ✅ Si la respuesta es exitosa (status 200), redirige
      if (response && response.success) {
        console.log("✅ Login exitoso, redirigiendo al dashboard");
        navigate("/dashboard"); // 👈 Redirige después del login
      }
    } catch (error) {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
