var mysql = require('mysql');
var dbconfig = require('../../config/db');
var connection = mysql.createConnection(dbconfig);
// var menuModel = require('../models/menu.model');

exports.render = function(req,res){
    res.render('index.ejs');
}
    /*
    console.log('index.ctrl dirname : ' + __dirname);
    var initSql = "";
    initSql += "SELECT m.menu_id, m.menu_name, m.menu_lvl, ms.menu_sub_id, ms.menu_sub_name, ms.menu_sub_lvl ,m.menu_action , ms.menu_sub_action ";
    initSql += "FROM check.MENU_MST m INNER JOIN check.MENU_SUB_MST ms "; 
    initSql += "ON m.menu_id = ms.menu_id "; 
    initSql += "WHERE m.del_flag = '0' and ms.del_flag = '0' ORDER BY ms.menu_sub_id";

    function callback(result){
        res.render('index.ejs',{
            'title':'test',
            'rows':result
        });
    }

    connection.query(initSql,function(err, rows){
        if(err) {
            throw err;
        }
        var result = [];
        if (rows.length > 0){
            for (var i=0; i  < rows.length; i++){
                console.log(rows[i]);
                result[i] = {
                    'menu_id':rows[i].menu_id,
                    'menu_name': rows[i].menu_name,
                    'menu_lvl': rows[i].menu_lvl,
                    'menu_action' : rows[i].menu_action,
                    'menu_sub_id' : rows[i].menu_sub_id,
                    'menu_sub_action' : rows[i].menu_sub_action,
                    'menu_sub_name' : rows[i].menu_sub_name,
                    'menu_sub_lvl' : rows[i].menu_sub_lvl,
                }
            }
        }
        callback(result);

    });
    
};
   */