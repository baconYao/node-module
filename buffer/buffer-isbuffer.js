var buffer = new Buffer('nodejs', 'utf8');
// 判斷是否為buffer
if(Buffer.isBuffer(buffer))
{
    console.log("The 'buffer' is a Buffer object.");
}
else
{
    console.log("The 'buffer' isn't a Buffer object.");
}

var str = "nodejs";
if(Buffer.isBuffer(str))
{
    console.log("The 'str' is a Buffer object.");
}
else
{
    console.log("The 'str' isn't a Buffer object.");
}
