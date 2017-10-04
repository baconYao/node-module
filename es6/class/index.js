class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return `vroom ${this.title} `;
  }
}

const car = new Car({ title: 'toyota' });
var ans = car.drive();
console.log(ans);
console.log("-------");


class Toyota extends Car {
  constructor(options) {
    super(options);      //Car.constructor()
    this.color = options.color;
  }

  honk() {
    return `beep ${this.color} ${this.title}`;
  }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Drive' });
var ans = toyota.honk();
console.log(ans);
var ans = toyota.drive();
console.log(ans);