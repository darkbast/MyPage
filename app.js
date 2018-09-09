
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.port || 3000;

//var express = require('express');
var express = require('./config/express_config');
var app = express();

/*
var express = require('./config/express_config');
var app = express();

// 에러 체크용
app.use((err,req,res,next) => {
    res.status(404).send('일치하는 조소가 없습니다.');
});
app.use((req,res,next) => {
    res.status(500).send('서버 에러');
});
*/

// 에러 체크용
app.use((err,req,res,next) => {
    res.status(404).send('일치하는 조소가 없습니다.'); 
});
app.use((req,res,next) => {
    res.status(500).send('서버 에러');
});

// 서버 리스너 시작
app.listen(port,() => {
    console.log('Start Server : ' + port);
});

module.exports = app;