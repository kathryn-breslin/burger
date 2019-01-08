var mysql = require("mysql2");
var connection;
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306, 
//     user: "root",
//     password: null,
//     database: "burgers_db"
// });

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306, 
        user: "root",
        password: "LittleSparrow1",
        database: "burgers_db"
    });
}
connection.connect();

// connection.connect(function(err) {
//     if (err) {
//         console.log("Error connecting: " + err.stack);
//         return;
//     }
//     console.log("Connected as ID " + connection.threadId);
// });

module.exports = connection;