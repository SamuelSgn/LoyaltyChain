const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Marvin2027&',
    database: 'foods'
});

connection.connect(function(err) {
    if (err) {
        console.error('Cannot be connected:' + err.stack);
        return;
    }
    console.log('Connexion successfully as id' + connection.threadId);
});

module.exports = connection;
