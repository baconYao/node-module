var cars = [
  {model: 'Bucike', price: 'CHEAP'},
  {model: 'LALA', price: 'expensive'}
];


var prices = cars.map(function(car) {
  return car.price;
});


console.log(prices);
