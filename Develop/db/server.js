const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root', 
    password: 'MCCARTHY12',
    database: 'movies_db',
    },
    console.log('successfully connected to the database!')
);









app.get('*', (req, res) => {
    res.send('404 page not found.')
})


app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});


//  test route
// app.get('/foo', (req, res) => {
//     res.send('foo');
// })