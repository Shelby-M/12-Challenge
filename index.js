const PORT = process.env.PORT || 3001;
const mysql = require("mysql2");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: `634Grand`,
  database: "employees_db",
});

module.exports = db;
