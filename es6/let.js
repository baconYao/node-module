let name = 'BaconYao';
console.log(name);

var x = 0;
if (true) {
  var x = 12;
  console.log(`x= ${x}`);
}
console.log(`x= ${x}`);

var y = 0;
if (true) {
  let y = 12;
  console.log(`y= ${y}`);
}
console.log(`y= ${y}`);


for(let i = 0; i < 3; i++) {
  console.log(`For loop: i = ${i}`);
}

// this will crash
// console.log(i);


function genCallback() {
  let name = 'Bacon';
  return function() {
    console.log(`Hello ${name}`);
  }
}
genCallback()();
