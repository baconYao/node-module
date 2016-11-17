// 刪除MySQL資料庫


var http = require("http"); // TODO: 引入HTTP模組
var mysql = require('mysql');   // TODO: 引入mysql模組
console.log("Now start HTTP server on port 3000...");
console.info();
/**
 * 建立資料庫連接
 */
var db = mysql.createConnection({
    host: "localhost",  // TODO: 主機位址
    user: "root",       // TODO: 資料庫用戶名
    password: "",   // TODO: 資料庫密碼
    database: "nodejs", // TODO: 資料庫名稱
    port: 3306          // TODO: 端口號
});
/**
 * 建立HTTP服務器
 */
http.createServer(function (req, res) {
    /**
     * 資料庫刪除 DELETE 操作
     */
    db.query('delete from userinfo where id=7;', function (errordelete, resdelete) {
        if (errordelete) console.log(errordelete);
        console.log("DELETE Return ==> ");
        console.log(resdelete);
        /**
         * 資料庫查詢 SELECT 操作
         */
        db.query('select * from userinfo;', function (errorselect, rows, fields) {
            res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
            res.write("<h3>測試 Node.js - MySQL 資料庫刪除操作!</h3><br/>");
            res.end(JSON.stringify(rows));
        });
    });
}).listen(3000);
