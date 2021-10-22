const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const db = require("./index");

db.connect(function (err) {
  if (err) throw err;
  console.log("**************************************");
  console.log("* HELLO! WELCOME TO EMPLOYEE MANAGER *");
  console.log("**************************************");
});

