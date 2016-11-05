console.info("------  Node.js非同步程式設計: Async series  -------------");
console.info();

// 使用'async'套件
// npm install --save async
var async = require("async");
// 使用waterfall函數方法
// 透過waterfall產生的value都會傳給下一個函數
async.waterfall([
    function(callback){
        // 當callback function的第一個參數為非空值時，waterfall會停止執行剩餘任務
        callback(null, 1);
    },
    function(data, callback){
        console.info("@" + data);
        callback('test', 2);
    },
    function(data, callback){
        console.info("~" + data);
        callback(null, 3);
    }
], function(err, results){
    console.log("R: "+results);
});

console.info("***********************************************************************");

async.waterfall([
    function(callback) {
        callback(null, 'one', 'two');
    },
    function(arg1, arg2, callback) {
      // arg1 now equals 'one' and arg2 now equals 'two'
        callback(null, 'three');
    },
    function(arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
], function (err, result) {
    // result now equals 'done'
});
console.info();
