'use strict';

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 讀取命令列訊息
rl.question("What is your name? ", function(answer){
    console.log("My name is ", answer);
    rl.close();
});

rl.question("How older are you? ", function(answer){
    console.log("I'm ", answer);
    rl.close();
});
