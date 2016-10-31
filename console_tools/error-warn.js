'use strict'

var fs = require("fs");
var file = 'error-warn.txt';
var encoding = 'UTF-8';
fs.readFile(file, encoding, function(err, data){
    if(err)
    {
        console.error("error - \n %s", err);
        console.warn("warn - \n %s", err);
    }
    else
    {
        console.log(data);
    }
});


// 可在cmd將error資訊導向error.log檔
// ex: node error-warn.js 2> error.log
