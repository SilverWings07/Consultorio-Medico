import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import CrearUsuario from "./users/CrearUsuario";
import Dashboard from "./dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<CrearUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
