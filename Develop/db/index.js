const db = require("./connection.js");

class Data {
    //  keeping a refrence to the connection on the class in case we need it for later
    constructor(db) {
        this.db = db;
    }


    findAllPossibleManagers(employeeId) {
        return this.db.promise().query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
        employeeId
        );
    }
}

module.exports = new Data(db);