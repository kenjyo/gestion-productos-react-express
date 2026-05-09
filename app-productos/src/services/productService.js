const API_URL = "http://localhost:3000/api/productos";

// 🔹 Manejo de respuesta y errores
const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Error en la petición");
  }

  return data;
};

// Obtener todos los productos
export const getProductos = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  return await response.json();
};

// Obtener un producto
export const getProductoById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Producto no encontrado");
  }

  return await response.json();
};

// Crear producto
export const createProducto = async (producto) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });

  if (!response.ok) {
    throw new Error("Error al crear el producto");
  }

  return await response.json();
};

// Actualizar producto
export const updateProducto = async (id, producto) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el producto");
  }

  return await response.json();
};

// Eliminar producto
export const deleteProducto = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar el producto");
  }

  return true; 
};
