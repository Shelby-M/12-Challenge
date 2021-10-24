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

db.connect(function (error) {
  if (error) throw error;
  console.log("HELLO! Welcome to Employee Manager");

  db.query("SELECT * from departments", function (error, res) {
    departments = res.map((department) => ({
      name: department.name,
      value: department.id,
    }));
  });

  db.query("SELECT * from employee_role", function (error, res) {
    roles = res.map((role) => ({
      name: role.title,
      value: role.id,
    }));
  });
  db.query("SELECT * from employee", function (error, res) {
    employees = res.map((employee) => ({
      name: `${employee.first_name} ${employee.last_name}`,
      value: employee.id,
    }));
  });
  startMenu();
});

// Function for Initial Prompt
function startMenu() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "choices",
      choices: [
        {
          name: "View All Departments",
          value: "viewAllDepartments",
        },
        {
          name: "View All Roles",
          value: "viewAllRoles",
        },
        {
          name: "View All Employees",
          value: "viewAllEmployees",
        },
        {
          name: "Add A Department",
          value: "addedNewDepartment",
        },
        {
          name: "Add A Role",
          value: "addRole",
        },
        {
          name: "Add An Employee",
          value: "addEmployee",
        },
        {
          name: "Update An Employee Role",
          value: "updateEmployeesRole",
        },
        {
          name: "End",
          value: "end",
        },
      ],
    })
    .then(function (res) {
      mainMenu(res.choices);
    });
}

// Function for Main Menu
function mainMenu(options) {
  switch (options) {
    case "viewAllDepartments":
      viewAllDepartments();
      break;
    case "viewAllRoles":
      viewAllRoles();
      break;
    case "viewAllEmployees":
      viewAllEmployees();
      break;
    case "addedNewDepartment":
      addedNewDepartment();
      break;
    case "addRole":
      addRole();
      break;
    case "addEmployee":
      addEmployee();
      break;
    case "updateEmployeesRole":
      updateEmployeesRole();
      break;
    case "end":
      end();
  }
}

// Function to View all Departments
function viewAllDepartments() {
  db.query("SELECT * FROM departments", function (error, res) {
    console.table(res);
    continueOrEnd();
  });
}

// Function to View all Roles
function viewAllRoles() {
  db.query("SELECT * FROM employee_role", function (error, res) {
    console.table(res);
    continueOrEnd();
  });
}

// Function to View all Employees
function viewAllEmployees() {
  db.query("SELECT * FROM employee", function (error, res) {
    console.table(res);
    continueOrEnd();
  });
}

// Function to Add Department
function addedNewDepartment() {}

function newDepartment(data) {}

// Function to Add Role
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the new role?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary of the new role?",
        name: "salary",
      },
      {
        type: "list",
        message: "Which department is the new role in?",
        name: "id",
        choices: departments,
      },
    ])
    .then(function (response) {
      addNewRole(response);
    });
}

function addNewRole(data) {
  db.query(
    "INSERT INTO employee_role SET ?",
    {
      title: data.title,
      salary: data.salary,
      department_id: data.id,
    },
    function (error, res) {
      if (error) throw error;
    }
  );
  continueOrEnd();
}

// Function to Add Employee
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName",
      },
      {
        type: "list",
        message: "What is the title of the employee?",
        name: "title",
        choices: roles,
      },
      {
        type: "list",
        message: "Who is the manager of the employee?",
        name: "manager",
        choices: employees,
      },
    ])
    .then(function (response) {
      newEmployee(response);
    });
}

function newEmployee(data) {
  db.query(
    "INSERT INTO employee SET ?",
    {
      first_name: data.firstName,
      last_name: data.lastName,
      role_id: data.title,
      manager_id: data.manager,
    },
    function (error, res) {
      if (error) throw error;
    }
  );
  continueOrEnd();
}

// Function to Update Role
function updateEmployeesRole() {}

function updateEmployeesRole(data) {
  continueOrEnd();
}

// Function to End or back to Main
function continueOrEnd() {
  confirm("Do you want to continue?").then(
    function confirmed() {
      startMenu();
    },
    function cancelled() {
      end();
    }
  );
}

function end() {
  console.log("Exiting Employee Manager");
  db.end();
  process.exit();
}
