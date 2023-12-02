const { prompt, default: inquirer } = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./Develop/db");

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
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "REMOVE_EMPLOYEE":
                removeEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
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

// NEED TO TEST
// remove employee
function removeEmployee() {
    prompt ([{
        type: "input",
        name: "deleteEmployee",
        message: "Enter the id of the employee you would like to remove"
    }])
    .then((response) => {
        let deleteEmployee = { id: response.deleteEmployee }
        db.removeEmployee(deleteEmployee)
        .then(([rows]) => {
            let department = db.viewAllDepartment()
            .then( data => {
                console.log("\n")
                console.table(data);
            })
            .then(() => loadMainPrompts());
        })
    })
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

// DONE
// view all departments
function viewDepartment() {
    db.viewAllDepartment()
        .then(([rows]) => {
            let department = rows;
            console.log("\n")
            console.table(department);
        })
        .then(() => loadMainPrompts());
}

// DONE
// add department
function addDepartment() {
    prompt ([{
        type: "input",
        name: "newDepartment",
        message: "What would you like to name the new department?"
    }])
    .then ((response) => {
        let newDepartment = { name: response.newDepartment }
        db.addDepartment(newDepartment)
        .then(([rows]) => {
            let department = rows;
            console.log("\n")
            console.table(department);
        })
        .then(() => loadMainPrompts());
    }) 
}

// DONE
// remove department
function removeDepartment() {
    prompt ([{
        type: "input",
        name: "deleteDepartment",
        message: "Enter the id of the department you would like to remove"
    }])
    .then((response) => {
        let deleteDepartment = { id: response.deleteDepartment }
        db.removeDepartment(deleteDepartment)
        .then(([rows]) => {
            let department = db.viewAllDepartment()
            .then( data => {
                console.log("\n")
                console.table(data);
            })
            .then(() => loadMainPrompts());
        })
    })
}

// DONE
// view all roles
function viewRoles() {
    db.viewAllRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n")
            console.table(roles);
        })
        .then(() => loadMainPrompts());
}


// add role
// getting an error on addRole and possibly removeRole
// when the user selects a sales department how do i get the sales department_id 
function addRole() {
    prompt ([
        {
            type: "input",
            name: "newRoleSalary",
            message: "What is the salary of the new role?",
        },
        {
            type: "list",
            message: "What is the name of the new role?",
            choices: ["Sales", "Engineering", "Finance", "Legal"],
            name: "newRoleName",
        },
        {
            type: "list",
            message: "Please select the department id of the role you would like to add",
            choices: ["1", "2", "3", "4"],
            name: "newRoleDepartmentId",
        },
    ])
    .then ((response) => {
        console.log(response)

        let newRole = { title: response.newRoleName, salary: response.newRoleSalary, department_id: response.newRoleDepartmentId }

        console.log (newRole)
        db.addRole(newRole)


        // let newRole = { title: response.newRoleTitle, salary: response.newRoleSalary, department_id: response.newRoleDepartmentId }
        // db.addRole(newRole)
        // .then(([rows]) => {
        //     let role = rows;
        //     console.log("\n")
        //     console.table(role);
        // })
        // .then(() => loadMainPrompts());
    }) 
}

//  COMPLETED
function removeRole() {
    prompt ([{
        type: "input",
        name: "deleteRole",
        message: "Enter the id of the role you would like to remove"
    }])
    .then((response) => {
        let deleteRole = { id: response.deleteRole }
        db.removeRole(deleteRole)
        .then(([rows]) => {
            let department = db.viewAllDepartment()
            .then( data => {
                console.log("\n")
                console.table(data);
            })
            .then(() => loadMainPrompts());
        })
    })
}