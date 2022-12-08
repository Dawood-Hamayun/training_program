const mysql = require ('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pokemon',
    database: 'training_project'
});

module.exports = db;