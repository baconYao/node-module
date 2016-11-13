//實作標準輸入串流

console.log('使用者輸入資料');
// 接受控制台使用者輸入事件
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function(){
    var chunk = process.stdin.read();
    if(chunk !== null)
    {
        process.stdout.write('Print Data: ' + chunk + '\n');
    }
});

// 結束控制台輸入事件
process.stdin.on('end', function(){
    process.stdout.write('end.\n');
});
