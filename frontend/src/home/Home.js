import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Consultorio Médico</h1>
      <p>Por favor, inicia sesión para continuar.</p>
      <div className="homepage-buttons">
        <Link to="/login" className="btn">Iniciar Sesión</Link>
        <Link to="/register" className="btn">Crear Usuario</Link>
      </div>
    </div>
  );
}

export default Homepage;
