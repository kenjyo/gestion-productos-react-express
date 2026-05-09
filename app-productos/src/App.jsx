import { Routes, Route, Navigate } from "react-router-dom";

// Importar páginas
import Productos from "./pages/Productos";
import CrearProducto from "./pages/CrearProducto";
import EditarProducto from "./pages/EditarProducto";

function App() {
  return (
    <Routes>
      {/* Ruta por defecto redirige a /productos */}
      <Route path="/" element={<Navigate to="/productos" />} />

      {/* Rutas principales */}
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/crear" element={<CrearProducto />} />
      <Route path="/productos/editar/:id" element={<EditarProducto />} />
    </Routes>
  );
}

export default App;