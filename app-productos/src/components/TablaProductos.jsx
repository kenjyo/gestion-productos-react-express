import { Link } from "react-router-dom";
import "./TablaProductos.css";

function TablaProductos({ productos, eliminarProducto }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.nombre}</td>
              <td>S/ {producto.precio}</td>
              <td>
                <Link to={`/productos/editar/${producto.id}`}>
                  <button className="btn btn-edit">Editar</button>
                </Link>

                <button
                  className="btn btn-delete"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaProductos;