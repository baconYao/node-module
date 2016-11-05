console.info("------  Node.js非同步程式設計: Async series  -------------");
console.info();

// 使用'async'套件
// npm install --save async
var async = require("async");
// 使用series函數方法
async.series({
    one: function(callback){
        callback(null, 'hello');
    },
    two: function(callback){
        callback(null, 'async');
    },
    three: function(callback){
        callback(null, 'series');
    }
}, function(err, results){
    console.log(results);
});

console.info();
