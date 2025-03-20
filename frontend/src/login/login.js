// ../frontend/src/login/login.js

import { useState } from "react";
import { login } from "./api";
import { useNavigate } from "react-router-dom";
import './styles.css';

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(correo, contraseña);
      
      // ✅ (status 200)
      if (response && response.success) {
        navigate("/dashboard"); // 👈 Redirige después del login
      }
    } catch (error) {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="body">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon"><ion-icon name="mail"></ion-icon></span>
            <input type="email" required value={correo} onChange={(e) => setCorreo(e.target.value) }></input>
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
            <input type="password" required value={contraseña} onChange={(e) => setContraseña(e.target.value) }></input>
            <label>Password</label>
          </div>

          <div className="remember-forgot">
            <input type="checkbox"></input>
            <label>Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <div className="register-link">
          <p>
            Don't have an account?
            <a href="#">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
