
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-overrid');
const connection = require('./db.js');
const app = express();
const router = require('./route.js');

var port = process.env.port || 3000;

app.set('view engine','ejs');

// app.use 미들웨어
// express.static 정적 파일이 있는 위치를 지정
// __dirname 현재 위치를 가리킴
app.use(express.static(path.join(__dirname,'html')));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);

// 에러 체크용
app.use((err,req,res,next) => {
    res.status(404).send('일치하는 조소가 없습니다.');
});
app.use((req,res,next) => {
    res.status(500).send('서버 에러');
});


// 서버 리스너 시작
app.listen(8080, () => {
    console.log('Express App on port 8080!');
});