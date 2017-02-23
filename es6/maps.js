// var myMap = new Map();

// // Set
// myMap.set('name', 'BaconYao');

// // Get
// console.log(myMap.get('name'));

// // Has
// myMap.set('age', 25);
// console.log(myMap.has('age'));

// // Delete
// myMap.delete('name');

// // Clear
// myMap.clear();

// // Size
// console.log(myMap.size);


// var user = {name: 'Yao~'};
// myMap.set(user, 'Taiwan');
// console.log(myMap.get(user));



// var myMap = new Map();

// myMap.set(1, 'Baconyao');
// myMap.set(2, 'Judy');
// myMap.set(3, 'Hello');

// console.log([...myMap]);
// console.log(myMap.keys());
// console.log(myMap.values());


// Challenge area
var location = {name: 'Taiwan'};
var secondLocation = {name: 'Oslo'};
var weather = new Map();

function setWeather(location, temp) {
  weather.set(location, temp);
}

function printWeather(location) {
  if(weather.has(location)) {
    console.log(`It's ${weather.get(location)} in ${location.name}`);
  } else {
    console.log(`No weather recorded for ${location.name}`);
  }
}

setWeather(location, 22);
printWeather(location);
printWeather(secondLocation);




