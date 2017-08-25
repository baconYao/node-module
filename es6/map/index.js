var number = [1,2,3];
var doubleNumbers = [];

for(var i = 0; i < number.length; i++) {
  doubleNumbers.push(number[i] * 2);
}


var doubled = number.map(function(number) {
  return number * 2;
});

console.log(doubleNumbers);
console.log(doubled);
