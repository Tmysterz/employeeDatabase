const { prompt } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");

init();

function init() {
    const logoText = logo({ name: "Employee Manager" }).render();

    console.log(logoText);

    loadMainPrompts();
}

function loadMainPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees", 
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Employees By Department",
                    value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
                },
                {
                    name: "View All Employees By Manager",
                    value: "VIEW_EMPLOYEES_BY_MANAGER"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Update Employee Manager",
                    value: "UPDATE_EMPLOYEE_MANAGER"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "Remove Role",
                    value: "REMOVE_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Remove Department",
                    value: "REMOVE_DEPARTMENT"
                },
                {
                    name: "View Total Utilized Budget By Department",
                    value: "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT"
                },
                {
                    name: "quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;

        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "VIEW_EMPLOYEES_BY_DEPARTMENT":
                viewEmployeesByDepartment();
                break;
            case "VIEW_EMPLOYEES_BY_MANAGER":
                viewEmployeesByManager();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "REMOVE_EMPLOYEE":
                removeEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            case "UPDATE_EMPLOYEE_MANAGER":
                updateEmployeeManager();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartment();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "REMOVE_DEPARTMENT":
                removeDepartment();
                break;
            case "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT":
                viewUtilizedBudgetByDepartment();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "REMOVE_ROLE":
                removeRole();
                break;
            
        }
    })
}

// view all employees
function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n")
            console.table(employees);
        })
        .then(() => loadMainPrompts());
}

// view all employees by department
function viewEmployeesByDepartment() {
    db.findEmployeesDepartment()
        .then(([rows]) => {
            let employeeDepartment = rows;
            console.log("\n")
            console.table(employeeDepartment);
        })
        .then(() => loadMainPrompts());
}

// view all employees by manager
function viewEmployeesByManager() {
    db.findAllEmployeesManager()
        .then(([rows]) => {
            let employeeManager = rows;
            console.log("\n")
            console.table(employeeManager);
        })
        .then(() => loadMainPrompts());
}

// add employee
function addEmployee() {
    db.addEmployee()
        .then(([rows]) => {
            let userAddEmployee = rows;
            console.log("\n")
            console.table(userAddEmployee);
        })
        .then(() => loadMainPrompts());
}

// remove employee
function removeEmployee() {
    db.removeEmployee()
        .then(([rows]) => {
            let userRemoveEmployee = rows;
            console.log("\n")
            console.table(userRemoveEmployee);
        })
        .then(() => loadMainPrompts());
}

// update employee role
function updateEmployeeRole() {
    db.updateEmployeeRole()
        .then(([rows]) => {
            let updateEmployeeR = rows;
            console.log("\n")
            console.table(updateEmployeeR);
        })
        .then(() => loadMainPrompts());
}

// update employee manager
function updateEmployeeManager() {
    db.updateEmployeeManager()
        .then(([rows]) => {
            let updateEmployeeM = rows;
            console.log("\n")
            console.table(updateEmployeeM);
        })
        .then(() => loadMainPrompts());
}

// view all departments
function viewDepartment() {
    db.viewDepartment()
        .then(([rows]) => {
            let department = rows;
            console.log("\n")
            console.table(department);
        })
        .then(() => loadMainPrompts());
}

// add department
function addDepartment() {
    db.addDepartment()
        .then(([rows]) => {
            let department = rows;
            console.log("\n")
            console.table(department);
        })
        .then(() => loadMainPrompts());
}

// remove department
function removeDepartment() {
    db.removeDepartment()
        .then(([rows]) => {
            let department = rows;
            console.log("\n")
            console.table(department);
        })
        .then(() => loadMainPrompts());
}

// view all departments and show their total utilized department budget
function viewUtilizedBudgetByDepartment() {
    db.viewDepartmentBudgets()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n")
            console.table(departments);
        })
        .then(() => loadMainPrompts());
}

// view all roles
function viewRoles() {
    db.viewRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n")
            console.table(roles);
        })
        .then(() => loadMainPrompts());
}

// add role
function addRole() {
    db.addRole()
        .then(([rows]) => {
            let role = rows;
            console.log("\n")
            console.table(role);
        })
        .then(() => loadMainPrompts());
}

//  remove role
function removeRole() {
    db.removeRole()
        .then(([rows]) => {
            let role = rows;
            console.log("\n")
            console.table(role);
        })
        .then(() => loadMainPrompts());
}


//  ask for help finishing the schema.sql

// ask about why my npm start is not working. cant find module error

// ask about whats happening in the viewUtilizedBudgetByDepartment() function

// ask about where to create the db.viewDepartmentBudgets() function

// what goes in connection.js


