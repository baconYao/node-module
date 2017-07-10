var colors = ['red', 'blue', 'green'];

colors.forEach((color) => {
  console.log(color);
});



var numbers = [1,2,3,4,5];

var sum =0;

const adder = (number) => {
  sum += number;
};

numbers.forEach(adder);

console.log(sum);