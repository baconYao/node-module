var readline = require('readline');
rl = readline.createInterface(
    process.stdin,
    process.stdout
);

// 定義模擬控制台命令列提示符號
rl.setPrompt('BaconJS>');
// 初始化模擬控制台
rl.prompt();
// 啟動readline模組的line事件
rl.on('line', function(line){
    switch(line.trim())
    {
        case 'name':
            console.log('king!');
            break;
        case 'code':
            console.log('NodeJS');
            break;
        case 'time':
            var date = new Date();
            console.log(date);
            break;
        default:
            console.log("Say what? I might have heard `" + line.trim() + "`");
            break;
    }
    rl.prompt();                //再次回到控制台命令列
}).on('close', function(){      // 啟動readline模組的close事件
    console.log("");
    console.log("Have a great day!");
    process.exit(0);
});;

