var async = require("async");
var count = 0;

// JSON array
var list = [
    { name: 'Jack', age: 20},
    { name: 'Lucy', age: 18},
    { name: 'Jack', age: 20},
    { name: 'Lucy', age: 18},
    { name: 'Lucy', age: 18}
];

async.whilst(
    function(){
        return count < 5;       //list.lengh = 5
    },
    function(callback){
        console.log("Go: " + count);
        list[count].age += 1;
        count++;
        setTimeout(callback, 1000);
    },
    function(err){
        console.log("Final err: " +　count);
        console.log(list);
    }
);

console.info("------------------------------");
