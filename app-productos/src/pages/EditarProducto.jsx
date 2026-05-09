import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProducto, getProductoById } from "../services/productService";
import FormularioProducto from "../components/FormularioProducto";

function EditarProducto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const data = await getProductoById(id);
        setProducto(data);
      } catch (error) {
        console.error(error);
      }
    };

    cargarProducto();
  }, [id]);

  const handleUpdate = async (producto) => {
    try {
      await updateProducto(id, producto);
      navigate("/productos");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <FormularioProducto
        onSubmit={handleUpdate}
        initialValues={producto}
        mode="edit"
      />
    </div>
  );
}

export default EditarProducto;