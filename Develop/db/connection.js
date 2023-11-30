const mysql = require('mysql2');

const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root', 
    password: 'MCCARTHY12',
    database: 'bussiness_db',
    },
    console.log('successfully connected to the database!')
);

db.connect(function (err) {
    if(err) throw err;
});

module.exports = db;