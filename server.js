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

db.query("SELECT * from departments", function (err, res) {
  departments = res.map((dep) => ({
    name: dep.department_name,
    value: dep.val,
  }));
});

db.query("SELECT * from employee_role", function (err, res) {
  roles = res.map((role) => ({
    name: role.title,
    value: role.id,
  }));
});

db.query("SELECT * from employee", function (err, res) {
  employee = res.map((employee) => ({
    name: `${employee.first_name} ${employee.last_name}`,
    value: employee.id,
  }));
});

