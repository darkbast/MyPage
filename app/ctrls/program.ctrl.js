var mysql = require('mysql');
var dbconfig = require('../../config/db');
var connection = mysql.createConnection(dbconfig);
// var menuModel = require('../models/menu.model');

exports.render = function(req,res){
  console.log("program start");

  res.render("listed/program/java/java",{});
};
