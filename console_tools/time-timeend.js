// 時間計時器

'use strict';

var n = 0;
console.time("10000*10000-times");
for(var i=0; i<10000; i++)
{
    for(var j=0; j<10000; j++)
    {
        n++;
    }
}

console.timeEnd("10000*10000-times");
