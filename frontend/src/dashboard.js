import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar el almacenamiento local o cookies si es necesario
    localStorage.removeItem("token"); // Ejemplo si usas token en localStorage
    navigate("/"); // Redirige al login
  };

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <p>Has iniciado sesión correctamente.</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;