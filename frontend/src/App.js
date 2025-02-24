import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CrearUsuario from './users/CrearUsuario'
import Login from "./login/login";
import Dashboard from "./dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CrearUsuario />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
