const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const confirm = require("inquirer-confirm");
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: `634Grand`,
  database: "employees_db",
});

console.log("**************************************");
console.log("* HELLO! WELCOME TO EMPLOYEE MANAGER *");
console.log("**************************************");
db.connect();
