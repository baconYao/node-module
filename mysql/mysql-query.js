// 查詢MySQL資料庫

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
    
    db.query('select * from userinfo;', function(err, rows, fields){
        res.writeHead(200, {"Content-Type" : "text/html;charset=utf8"});
        res.write("<h3>測試Node.js-MySQL資料庫查詢操作!</h3></br>");
        console.log(fields);
        res.end(JSON.stringify(rows));
    });


}).listen(3000);

