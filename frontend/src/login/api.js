// ../frontend/src/login/api.js

const API_URL = "https://consultorio-medico-mh5o.onrender.com/api/login";
// const API_URL = "http://localhost:5000/api/login";

export const login = async (correo, contraseña) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correo, contraseña }),
      credentials: 'include' // 👈 Esto permite el envío de cookies
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Error en la autenticación");
    }

    console.log("✅ Usuario autenticado correctamente");

    return data;
  } catch (error) {
    console.error("❌ Error en login:", error);
    throw error;
  }
};
