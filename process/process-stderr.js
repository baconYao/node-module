// 實作標準錯誤串流

var fs = require('fs');
var file = 'err.txt';
var encoding = 'UTF-8';
fs.readFile(file, encoding, function(err, data){
    if(err)
    {
        setTimeout(function(){
            process.stderr.write('err: ' + err + '\n');     //列印輸出標準錯誤串流
        }, 1000);
    } 
    else
    {
        console.log(data);
    }
});
