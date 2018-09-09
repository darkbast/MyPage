
/*
const mysql = require('mysql');


var conn = mysql.createConnection({
    hostname : "127.0.0.1",
    user : "root",
    password : "",
    // port : port,
    database : "check"
});
*/

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

// module.exports = conn;

/*
const mysql = require('mysql');
module.exports = function(){
    var connection = mysql.createConnection({
        hostname : "127.0.0.1",
        user : "root",
        password : "",
        port : 3306,
        database : "check"
    });
    return connection;
};
*/
module.exports = {
    hostname : "127.0.0.1",
    user : "root",
    password : "",
    port : 3306,
    database : "check"
};