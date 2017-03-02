var age = 25;

function printHello() {
  console.log("First Hello!");
}

var person = {
  name: 'Bacon',
  age,
  printHello,
  ['Test' + (3 + 2)]: 'I am Test5',
  // printAge: function() {},
  printAge () {
    console.log(this.age);
  }
};

console.log(person.Test5);
person.printAge();
person.printHello();
