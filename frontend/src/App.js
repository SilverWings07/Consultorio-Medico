import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Home";
import Login from "./pages/Login";
import CrearUsuario from "./pages/Register";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CrearUsuario />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
