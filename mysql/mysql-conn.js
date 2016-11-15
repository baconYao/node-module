// 連接MySQL資料庫

// 須裝node-mysql模組
// npm install --save node-mysql

'use strict';

var http = require('http');
var mysql = require('mysql');

console.log("Now start HTTP server on port 3000......");
console.info();

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs",
    port: 3306
});


// create a local server listen on 3000 port
http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"});
    res.write("<h3>測試Node.js-MySQL資料庫連接!</h3></br>");

    // 測試資料庫連接
    db.connect(function(err){
        if(err)
        {
            res.end('<p>Error Connected to MySQL!</p>');
            return;
        }
        else 
        {
            res.end('<p>Connected to MySQL!</p>');
        }
    });
}).listen(3000);

