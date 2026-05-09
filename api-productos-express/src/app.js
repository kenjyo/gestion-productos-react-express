const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const productRoutes = require("./routes/producto.routes");

app.use("/api/productos", productRoutes);

module.exports = app;