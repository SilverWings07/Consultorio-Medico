import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./home/Home";
import Login from "./login/prueba";
import CrearUsuario from "./register/Register";
// import Dashboard from "./dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CrearUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
