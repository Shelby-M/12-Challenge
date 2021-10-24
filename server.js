const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const confirm = require("inquirer-confirm");
const Choices = require("inquirer/lib/objects/choices");
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
startMenu();

function startMenu() {
  inquirer
    .prompt({
      name: "choices",
      type: "list",
      message: "Please select a task from the menu",
      choices: [
        {
          name: "View Departments",
          value: "viewDepartments",
        },
        {
          name: "View Employee Roles",
          value: "viewEmployeeRoles",
        },
        {
          name: "View a list of Employees",
          value: "viewEmployeeList",
        },
        {
          name: "Add to Departments",
          value: "addDepartments",
        },
        {
          name: "Add an Employee Role",
          value: "addEmployeeRole",
        },
        {
          name: "Add a new Employee",
          value: "addNewEmployee",
        },
        {
          name: "Exit",
          value: "exit",
        },
      ],
    })
    .then(function (res) {
      startMenu(res.choices);
    });
}

function menuOptions(answers) {
  switch (answers) {
    case "View Departments":
      viewDepartments();
      break;
    case "View Employee Roles":
      viewEmployeeRoles();
      break;
    case "View a list of Employees":
      viewEmployeeList();
      break;
    case "Add to Departments":
      addDepartments();
      break;
    case "Add an Employee Role":
      addEmployeeRole();
      break;
    case "Add a new Employee":
      addNewEmployee();
      break;
    case "Exit":
      exit();
  }
}

function viewDepartments() {}

function viewEmployeeRoles() {}

function viewEmployeeList() {}

function addDepartments() {}

function addEmployeeRole() {}

function exit() {}
