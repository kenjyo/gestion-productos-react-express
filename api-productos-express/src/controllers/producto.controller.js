const productoModel = require("../models/producto.model");

// GET todos los productos
const getAllProductos = async (req, res) => {
    try {
        const productos = await productoModel.getAllProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos" });
    }
};

// GET producto por ID
const getProductoById = async (req, res) => {
    try {
        const { id } = req.params;

        const producto = await productoModel.getProductoById(id);

        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener producto" });
    }
};

// POST crear producto
const createProducto = async (req, res) => {
    try {
        const { nombre, precio } = req.body;

        const result = await productoModel.createProducto(nombre, precio);

        res.status(201).json({
            message: "Producto creado",
            id: result.insertId
        });

    } catch (error) {
        console.log(error); 
        res.status(500).json({ message: "Error al crear producto" });
    }
};

// PUT actualizar producto
const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio } = req.body;

        const result = await productoModel.updateProducto(id, nombre, precio);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto actualizado" });

    } catch (error) {
        res.status(500).json({ message: "Error al actualizar producto" });
    }
};

// DELETE eliminar producto
const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await productoModel.deleteProducto(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        res.json({ message: "Producto eliminado" });

    } catch (error) {
        res.status(500).json({ message: "Error al eliminar producto" });
    }
};

module.exports = {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto
};