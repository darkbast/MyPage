var mysql = require('mysql');
var dbconfig = require('../../config/db');
var connection = mysql.createConnection(dbconfig);

module.exports = function(){
    var result = [];
    var initSql = "";
    initSql += "SELECT m.menu_id, m.menu_name, m.menu_lvl, ms.menu_sub_id, ms.menu_sub_name, ms.menu_sub_lvl ";
    initSql += "FROM check.MENU_MST m INNER JOIN check.MENU_SUB_MST ms "; 
    initSql += "ON m.menu_id = ms.menu_id "; 
    initSql += "WHERE m.del_flag = '0' and ms.del_flag = '0' ORDER BY ms.menu_sub_id";

    var first = function(initSql){
        connection.query(initSql,function(err, rows){
            if(err) throw err;
    
            if (rows.length > 0){
                for (var i=0; i  < rows.length; i++){
                    console.log(rows[i]);
                    result[i] = {
                        'menu_id':rows[i].menu_id,
                        'menu_name': rows[i].menu_name,
                        'menu_lvl': rows[i].menu_lvl,
                        'menu_sub_id' : rows[i].menu_sub_id,
                        'menu_sub_name' : rows[i].menu_sub_name,
                        'menu_sub_lvl' : rows[i].menu_sub_lvl,
                    };
                }
            }
            return second(result);
        });
    };

    var second = function(result){
        return result;
    };

    return first(initSql);
};
/*
module.exports =  {
    menu_init : function(){
        connection.query(initSql,function (err, rows){
            if(err) throw err;

            var i = 0;
            console.dir(rows);
            if (rows.length > 0){
                for (var i=0; i  < rows.length; i++){
                    console.log(rows[i]);
                    result[i] = {
                        'menu_id':rows[i].menu_id,
                        'menu_name': rows[i].menu_name,
                        'menu_lvl': rows[i].menu_lvl,
                        'menu_sub_id' : rows[i].menu_sub_id,
                        'menu_sub_name' : rows[i].menu_sub_name,
                        'menu_sub_lvl' : rows[i].menu_sub_lvl,
                    }
                }
            }
        });
    },
    menu_return : function(){
        return result;
    }
};
*/
