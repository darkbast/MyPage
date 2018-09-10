
//var connection = require('../../config/db.js');


var mysql = require('mysql');
var dbconfig = require('../../config/db');
var connection = mysql.createConnection(dbconfig);

exports.render = function(req,res){
    console.log('index.ctrl dirname : ' + __dirname);

    connection.query('SELECT * FROM check.MENU_MST',function (err, rows){
        if(err) throw err;
        var result = [];
        var i = 0;
        console.dir(rows);
        if (rows.length > 0){
            for (var i=0; i  < rows.length; i++){
                console.log(rows[0]);
                result[i] = {
                    'menu_id':rows[i].menu_id,
                    'menu_name': rows[i].menu_name
                }
            }
        }
        res.render('index.ejs',{
            'title':'test',
            'rows':rows
        });
    });
};


























>>>>>>> .theirs
