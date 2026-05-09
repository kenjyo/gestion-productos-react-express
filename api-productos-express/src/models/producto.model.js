const db = require("../config/db");

// Obtener todos los productos
const getAllProductos = async () => {
    const [rows] = await db.query("SELECT * FROM productos");
    return rows;
};

// Obtener producto por ID
const getProductoById = async (id) => {
    const [rows] = await db.query(
        "SELECT * FROM productos WHERE id = ?",
        [id]
    );
    return rows[0];
};

// Crear producto
const createProducto = async (nombre, precio) => {
    const [result] = await db.query(
        "INSERT INTO productos (nombre, precio) VALUES (?, ?)",
        [nombre, precio]
    );
    return result;
};

// Actualizar producto
const updateProducto = async (id, nombre, precio) => {
    const [result] = await db.query(
        "UPDATE productos SET nombre = ?, precio = ? WHERE id = ?",
        [nombre, precio, id]
    );
    return result;
};

// Eliminar producto
const deleteProducto = async (id) => {
    const [result] = await db.query(
        "DELETE FROM productos WHERE id = ?",
        [id]
    );
    return result;
};

module.exports = {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
};