function greet (name = 'BaconYao') {
  console.log('Hello ' + name + '!');
  console.log(`Hello  ${name}!`);
}

greet();
greet('Kate');

console.log(`1 + 6 = ${1 + 6}`);

console.log(`Hey,

This kindof looks like an email

-BaconYao`);


var person = {
  name: 'BaconYao',
  age: 25
};

var defaultPeron = {
  name: 'Anonymous',
  age: 0
};

// function name anonymous, age, 0
function welcomePerson (person = defaultPeron) {
  console.log(`Hello ${person.name}! Your are ${person.age}.`);
}

welcomePerson();
welcomePerson(person);
