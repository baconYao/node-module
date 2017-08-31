var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 },
];


var result = computers.every(function(computer) {
  return computer.ram > 16;
});

console.log(result);



var result2 = computers.some(function(computer) {
  return computer.ram > 16;
});

console.log(result2);



var names = [
  "Yao",
  "Judy",
  "Alice"
];

var result3 = names.every(function(name) {
return name.length > 4;
});
console.log(result3);
