const mysql = require('mysql');


var conn = mysql.createConnection({
    hostname : "127.0.0.1",
    user : "root",
    password : "",
    database : "check"
});

/*
module.exports  = () => {

    function connect() {
        mysql.createConnection({
            hostname : "127.0.0.1",
            user : "root",
            password : "",
            database : "check"
        });

    }
    connect();
};
*/

module.exports = conn;