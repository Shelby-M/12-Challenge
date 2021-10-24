USE employees_db;

INSERT INTO departments (department_name) VALUES
        ('HR'),
        ('Finance'),
        ('IT'),
        ('Marketing');

INSERT INTO employee_role (title, salary, department_id) Values 
        ('HR Manager', 70000, 1),
        ('HR Director', 70000, 1),
        ('Accountant', 80000, 2),
         ('Financial Advisor', 80000, 2),
         ('IT Coordinator', 90000, 3),
         ('Engineer', 91000, 3),
         ('Marketing Manager', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
        ('Bailey', 'Moriarty', 1, 1),
        ('Rochelle', 'Reaper', 2, null),
        ('Shelby','Rose', 1, 3),
        ('Tillie', 'Williams', 1, null),
        ('Mabel', 'Taylor', 3, null),
        ('Rochelle', 'Reaper', 4, 3),
        ('Cletus', 'Ramone', 4, null);
        