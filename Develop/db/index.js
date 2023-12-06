const db = require("./connection.js");

class Data {
    //  keeping a refrence to the connection on the class in case we need it for later
    constructor(db) {
        this.db = db;
    }

    findAllEmployees() {
        return this.db.promise().query(
            "SELECT * FROM employee JOIN role ON employee.role_id = role.id "
        );
    }

    addEmployee(employee) {
        return this.db.promise().query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", employee
        )
    }

    // need to test
    removeEmployee(employee) {
        return this.db.promise().query(
            "DELETE FROM employee WHERE id= ?", employee.id
        )
    }

    updateEmployeeRole(updatedRole) {
        return this.db.promise().query(
            "UPDATE employee SET role_id = ? WHERE  manager_id = ? ", updatedRole
        )
    }

    // COMPLETED
    viewAllDepartment() {
        return this.db.promise().query(
            "SELECT * FROM Department"
        );
    }

    // COMPLETED
    addDepartment(department) {
        return this.db.promise().query(
            "INSERT INTO department SET ?", department
        );
    }
    

    // COMPLETED
    removeDepartment(department) {
        return this.db.promise().query(
            "DELETE FROM department WHERE id= ?", department.id
        );
    }

    // COMPLETED
    viewAllRoles() {
        return this.db.promise().query(
            "SELECT * FROM Role"
        );
    }

    // COMPLETED

    addRole(role) {
        return this.db.promise().query(
            "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", role
        )
    }

    // COMPLETED
    removeRole(role) {
        console.log(role)
        return this.db.promise().query(
            "DELETE FROM role WHERE id= ?", role.id
        )
    }

}

module.exports = new Data(db);