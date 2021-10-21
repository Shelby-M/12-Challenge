DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE departments (
id INT(12) NOT NULL,
department_name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE employee_role (
id INT(12) NOT NULL,
PRIMARY KEY(id),
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT(12) NOT NULL
);

CREATE TABLE employee(
    id INT(12) NOT NULL,
    PRIMARY KEY (id) ,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT(12) NOT NULL,
    manager_id INT(12) NULL
);