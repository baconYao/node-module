//查詢MongoDB資料集合

var http = require("http"); // TODO: 引入HTTP模組
var mongodb = require('mongodb');   // TODO: 引入 mongodb 模組
console.log("Now start HTTP server on port 3000...");
console.info();
/**
 * 建立資料庫服務器連接
 */
var server = new mongodb.Server(
    'localhost',    // TODO: 主機位址
    27017,          // TODO: 端口號
    {
        auto_reconnect: true    // TODO: 自動重連
    }
);
/**
 * 建立資料庫連接
 */
var db = new mongodb.Db(
    'nodejs',   // TODO: 資料庫名稱
    server,     // TODO: 資料庫服務器
    {
        safe: true
    }
);
/**
 * 測試資料庫連接
 */
// db.open(function(err, db){
//     if(!err)
//     {
//         console.log('log - connect mongdb successfully!');
//     } else {
//         console.log('log - ' + err);
//     }

// });
/**
 * 建立HTTP服務器
 */
http.createServer(function (req, res) {
    res.writeHead(200, { "Content-Type" : "text/html;charset=utf8" });
    res.write("<h3>測試 Node.js - MongoDB 資料庫操作!</h3><br/>");
    /**
     * 測試資料庫連接
     */
    db.open(function(err, db) {
        if(!err) {
            res.write('<p>Connected MongoDB:nodejs successfully!</p>');
            db.collection('userinfo', { safe: true }, function(errcollection, collection) {
                if(!errcollection) {
                    console.log(collection);
                    res.write('<p>Connected MongoDB:nodejs:userinfo successfully!</p>');
                    /**
                     * 查詢資料集合, 方式一
                     */
                    collection.find().toArray(function(errorfind, cols) {
                        if(!errorfind) {
                            res.write('<p>collection.find() is: </p>');
                            res.write(JSON.stringify(cols));
                            console.log(cols);
                        }
                    });
                    /**
                     * 查詢資料集合, 方式二
                     */
                    collection.find({userid:'king'}).toArray(function(errorfind, cols) {
                        if(!errorfind) {
                            res.write('<p>collection.find({}) is: </p>');
                            res.write(JSON.stringify(cols));
                            console.log(cols);
                        }
                    });
                    /**
                     * 查詢資料集合, 方式三
                     */
                    collection.findOne({username:'king'}, function(errorfind, col) {
                        if(!errorfind) {
                            res.write('<p>collection.findOne({}) is: </p>');
                            res.write(JSON.stringify(col));
                            console.log(col);
                        }
                    });
                } else {
                    console.log('log - ' + err);
                }
            });
        } else {
            res.end('<p>Error Connected to MongoDB!</p>');
            console.log('log - ' + err);
        }
        //res.end("<h5>------ end operations ------</h5><br/>");
    });
}).listen(3000);    // TODO: 監聽3000端口號
