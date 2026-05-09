import { useNavigate } from "react-router-dom";
import FormularioProducto from "../components/FormularioProducto";
import { createProducto } from "../services/productService";

function CrearProducto() {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      await createProducto(data);
      navigate("/productos");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <FormularioProducto
        onSubmit={handleCreate}
        mode="create"
      />
    </div>
  );
}

export default CrearProducto;