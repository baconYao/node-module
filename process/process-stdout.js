// 實作標準輸出串流

console.log('Node.js Module - stdout method. ');
process.stdout.write('Node.js Process Module - stdout method');
console.info('\n');
console.log('console.log() 方法封裝了 process.stdout.write() 方法');
console.log = function(d){
    process.stdout.write('process.stdout.write: ' + d + '\n');
}

console.log('Node.js Process Module - stdout method');
