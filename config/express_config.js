
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// var session = require('express-session');

module.exports = function(){
    var app = express();
    app.use(morgan('dev'));
    if(process.env.NODE_ENV === 'development'){
        
    }else if(process.env.NODE_ENV === 'production'){

    }
    app.use(bodyParser.urlencoded({
        extended : true
    }));
    app.use(bodyParser.json());

    app.use(methodOverride());
/*
    app.use(session({
        saveUninitialized:true,
        resave:true,
        secret:config.sessionSecret
    }));
*/
    app.set('views','./app/views');
    app.set('view engine','ejs');

    require('../app/routers/index.routes')(app);
    require('../app/routers/admin.routes')(app);
    return app;
};