console.info();

/* queue()函數是parallel()函數的加強版，透過限制worker數量，不再一次性全部執行，
   當worker數量不夠用時，新加入的任務將會排隊等候，直到有新的worker可用。

    queue(worker, concurrency)
        worker: 是執行任務的callback function
        concurrency: 定義worker同時執行任務的數量上限
*/

var async = require('async');

// 定義一個queue, 設worker數量為2
var q = async.queue(function(task, callback){
    console.log('worker is processing task: ', task.name);
    callback();
}, 2);

// 獨立加入5個任務
q.push({name: 'foo'}, function(er){
    console.log('finished processing foo');
});

q.push({name: 'bar'}, function(er){
    console.log('finished processing cap');
});

q.push({name: 'cap'}, function(er){
    console.log('finished processing cap');
});

q.push({name: 'egg'}, function(er){
    console.log('finished processing egg');
});

q.push({name: 'app'}, function(er){
    console.log('finished processing app');
});

// listen: 當最後一個任務交給worker時，將使用該函數
q.empty = function() {
    console.log('no more tasks waiting');
};

// listen: 當最有任務執行完以後，將使用該函數
q.drain = function() {
    console.log('all tasks have been processed');
};
