const db = require("./connection.js");

class Data {
    //  keeping a refrence to the connection on the class in case we need it for later
    constructor(db) {
        this.db = db;
    }

    findAllEmployees() {
        return this.db.promise().query(
            "SELECT * FROM employee"
        );
    }

    addEmployee() {

    }

    // need to test
    removeEmployee(employee) {
        console.log(employee)
        return this.db.promise().query(
            "DELETE FROM employee WHERE id= ?", employee.id
        )
    }

    updateEmployeeRole() {

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
        console.log(department)
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

    // getting error on addRole 
    // all values of new role added are either 0 or null

    addRole(role) {
        return this.db.promise().query(
            "INSERT INTO role (title, salary, department_id) VALUES (?)", role
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