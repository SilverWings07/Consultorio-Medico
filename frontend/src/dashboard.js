import { useEffect, useState } from "react";

const Dashboard = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bienvenido, aquí está tu token:</p>
      <pre>{token ? token : "No hay token disponible"}</pre>
    </div>
  );
};

export default Dashboard;
