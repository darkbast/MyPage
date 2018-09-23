var mysql = require('mysql');
var dbconfig = require('../../config/db');
var connection = mysql.createConnection(dbconfig);

exports.render = function(req,res){

    var sql = "SELECT * FROM java";

    var body = [];
    body.push({
        java_id:'3',
        java_content:'title3',
        java_body:'test3',
    });
    body.push({
        java_id:'2',
        java_content:'title2',
        java_body:'test2',
    });
    body.push({
        java_id:'1',
        java_content:'title1',
        java_body:'test1',
    });

    res.render('listed/program/java/java',{'body':body});

    /*
    function results(rows){
        return rows;
    }

    connection.query(sql,function(err,rows){
        if (err) throw err;

        // ROWS
        // 글번호, 작성일, 작성자, 글내용, 덧글자, 덧글레벨, 덧글대상
        // 버튼
        
    });
    */
}