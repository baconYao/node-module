class Person {
  constructor (name) {
    this.name = typeof name === 'string' ? Person.capitalizeWord(name) : 'Anonymous';
  }

  // method
  printGreeting() {
    console.log(`Hi, I am ${this.name}!`);
  }

  // static method, 不須create instance, 看Line 24
  static capitalizeWord (word) {
    return word[0].toUpperCase() + word.slice(1);
  }

};

var person1 = new Person('baconYao');
person1.printGreeting()

var person2 = new Person();
person2.printGreeting()

console.log(Person.capitalizeWord('mike'));
