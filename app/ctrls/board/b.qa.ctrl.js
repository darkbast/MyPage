var mysql = require('mysql');
var dbconfig = require('../../../config/db');
var connection = mysql.createConnection(dbconfig);

exports.render = function(req,res){
    console.log('b.qa.ctrl dirname : ' + __dirname);
    var m_div_sql = "";
    m_div_sql += "SELECT div1,div2,div3 ";
    m_div_sql += "FROM check.m_division ";

    var t_qa_sql = "";
    t_qa_sql += "SELECT qa_div,qa_title,qa_body FROM check.t_qa ";

    function callback(result,result2){
        console.dir(result2);
        res.render('./board/b_qa.ejs',{'ret1':result,'ret2':result2});
    }

    connection.query(m_div_sql,function(err, rows){
        if(err) {
            throw err;
        }
        var result = [];
        if (rows.length > 0){
            for (var i=0; i  < rows.length; i++){
                console.log(rows[i]);
                result[i] = {
                    'div1':rows[i].div1,
                    'div2':rows[i].div2,
                    'div3':rows[i].div3,
                }
            }
        }

        connection.query(t_qa_sql,function(err,rows2){
            var result2 = [];
            if (rows2.length > 0){
                for (var i=0; i  < rows2.length; i++){
                    console.log(rows2[i]);
                    result2[i] = {
                        'div':rows2[i].qa_div,
                        'title':rows2[i].qa_title,
                        'body':rows2[i].qa_body,
                    }
                }
            }
            callback(result,result2);
        });
    });
};

exports.search_render = function(req,res){
    console.log("search_render start");
    console.dir("req : " + req);
    var result2 = [];
    result2[0] = {
        'div':'div1',
        'title':'title1',
        'body':'body1',
    };
    result2[1] = {
        'div':'div2',
        'title':'title2',
        'body':'body2',
    };
    console.log("search_render end");
    res.json({'ret':result2});
};