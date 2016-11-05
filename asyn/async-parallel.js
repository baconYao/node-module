console.info("------  Node.js非同步程式設計: Async series  -------------");
console.info();

// 使用'async'套件
// npm install --save async
var async = require("async");
// 使用parallel函數方法
// 三個function同時執行
async.parallel([
    function(callback){
        setTimeout(function(){
            console.log("2000");
            callback(null, 'two');
        }, 2000);
    },
    function(callback){
        setTimeout(function(){
            console.log("1000");
            callback(null, 'one');
        }, 1000);
    },
    function(callback){
        setTimeout(function(){
            console.log("500");
            callback(null, 'three');
        }, 500);
    }
], function(err, results){
    console.log(results);
});

console.info();
