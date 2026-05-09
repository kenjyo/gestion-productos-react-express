import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductos, deleteProducto } from "../services/productService";
import TablaProductos from "../components/TablaProductos";
import "../styles/layout.css";

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (err) {
        console.error("Error al obtener productos:", err);
      }
    };

    fetchProductos();
  }, []);

  const eliminarProducto = async (id) => {
    try {
      await deleteProducto(id);
      setProductos(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      console.error("Error al eliminar producto:", err);
    }
  };

  return (
    <div className="page-container">

      <h1 className="page-title">Lista de Productos</h1>

      <div className="page-actions">
        <Link to="/productos/crear">
          <button className="btn-create">Crear Producto</button>
        </Link>
      </div>

      <TablaProductos 
        productos={productos}
        eliminarProducto={eliminarProducto}
      />

    </div>
  );
}

export default Productos;