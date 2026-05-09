const express = require("express");
const router = express.Router();

const productoController = require("../controllers/producto.controller");

/* =========================
   GET - todos los productos
========================= */
router.get("/", productoController.getAllProductos);

/* =========================
   GET - producto por ID
========================= */
router.get("/:id", productoController.getProductoById);

/* =========================
   POST - crear producto
========================= */
router.post("/", productoController.createProducto);

/* =========================
   PUT - actualizar producto
========================= */
router.put("/:id", productoController.updateProducto);

/* =========================
   DELETE - eliminar producto
========================= */
router.delete("/:id", productoController.deleteProducto);

module.exports = router;