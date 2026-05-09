const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // XAMPP normalmente vacío
  database: "productos_db"
});

module.exports = db;