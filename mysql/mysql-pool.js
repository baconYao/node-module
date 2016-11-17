// 操作MySQL資料庫連接池
// 連接池負責分配、管理和釋放資料庫連接，它允許應用程式重複使用一個現有的資料庫連接，不需要每次重新建立一個。

var http = require("http"); // TODO: 引入HTTP模組
var mysql = require('mysql');   // TODO: 引入mysql模組
console.log("Now start HTTP server on port 3000...");
console.info();
/**
 * 建立資料庫連接池
 */
var pool = mysql.createPool({
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
     * 取得資料庫連接池
     */
    pool.getConnection(function (err, conn) {
        if(err) {
            console.log("POOL ==> " + err);
            console.log();
        }
        /**
         * 定義SQL查詢語句
         * @type {string}
         */
        var selectSQL = 'select * from userinfo';
        /**
         * 執行資料查詢操作
         */
        conn.query(selectSQL, function(err, rows) {
            if(err) {
                console.log(err);
                console.log();
            }
            console.log("SELECT ==> ");
            for (var i in rows) {
                console.log(rows[i]);
            }
            conn.release(); // TODO: 釋放資料庫連接
            res.writeHead(200, { "Content-Type": "text/html;charset=utf8" });
            res.write("<h3>測試 Node.js - MySQL 資料庫連接池操作!</h3><br/>");
            res.end(JSON.stringify(rows));
        });
    });
}).listen(3000);
