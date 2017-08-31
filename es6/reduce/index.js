var numbers = [ 10, 20, 30];
var sum = 0;


var result = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);        //0 is initial value of the sum

console.log(result);



var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];


var result2 = primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);         //[] is the initail value of previous

console.log(result2);


console.log("-----------------------------------------------------------------------------------");

/*
  判斷()是否成對
  ((())) --> true
  (()()()()()()) --> true
  ((()))) --> flase
  )()( --> flase
*/
function balancedParens(string) {
  return !string.split("").reduce(function(previous, char) {
    if(previous < 0) {return previous;}
    if(char === "(") {return ++previous;}
    if(char === ")") {return --previous;}
  }, 0);
}

console.log(balancedParens("(((("));
console.log(balancedParens("((()))"));
console.log(balancedParens("(()()()()()())"));
console.log(balancedParens(")()("));
console.log(balancedParens("((())))"));
console.log(balancedParens(")("));

