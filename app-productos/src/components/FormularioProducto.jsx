import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./FormularioProducto.css";

function FormularioProducto({ onSubmit, initialValues, mode }) {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const isEdit = mode === "edit";

  useEffect(() => {
    if (initialValues) {
      setNombre(initialValues.nombre || "");
      setPrecio(initialValues.precio || "");
    } else {
      setNombre("");
      setPrecio("");
    }
  }, [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || precio === "") {
      alert("Debe completar todos los campos");
      return;
    }

    onSubmit({
      nombre,
      precio: Number(precio),
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="title">
        {isEdit ? "Editar Producto" : "Crear Producto"}
      </h2>

      <div className="field">
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Precio</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>

      <div className="actions">
        <Link to="/productos" className="btn secondary">
          Volver
        </Link>

        <button type="submit" className="btn primary">
          {isEdit ? "Actualizar" : "Guardar"}
        </button>
      </div>
    </form>
  );
}

export default FormularioProducto;