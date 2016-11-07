// 定義並初始化Buffer物件
// 陣列形式
var buffer16 = new Buffer([0x6e, 0x6f, 0x64, 0x65, 0x6a, 0x73]);
console.log("The variable buffer16's length is " +　buffer16.length + ".");
console.log("The variable buffer16 length is " +　buffer16 + ".");

// 讀取buffer物件
for(var i = 0; i < buffer16.length; i++)
{
    console.log("buffer16[" + i + "] is " +　buffer16[i]);
    console.log("buffer16[" + i + "].toString is " +　buffer16[i].toString());
}

console.log(buffer16.toString('utf8'));     //utf8編碼
console.log(buffer16.toString('hex'));     //hex編碼

// 定義並初始化Buffer物件 --- bufferUTF8
var bufferUTF8 = new Buffer("Nodejs", 'utf8');
console.log("The variable bufferUTF8's length is " + bufferUTF8.length + ".");
console.log("The variable bufferUTF8 length is " + bufferUTF8 + ".");

for(var i = 0; i < bufferUTF8.length; i++)
{
    console.log("bufferUTF8[" + i + "] is " +bufferUTF8[i]);
    console.log("bufferUTF8[" + i + "].toString is " +bufferUTF8[i].toString());
}

console.log(bufferUTF8.toString('utf8'));     //utf8編碼
console.log(bufferUTF8.toString('hex'));     //hex編碼
