var people = ['Yao', 'Judy', 'Jhon', 'Kity'];

// people.forEach(function(name) {
//   console.log(name);
// });

// people.forEach((name) => {
//   console.log(name);
// });

// people.forEach((name) => console.log(name));




// function add (add) {
//  return a + b;
// }

// var add = (a, b) => a + b;
// var add = (a, b) => {return a + b};

// console.log(add(3, 9));





var person = {
  name: 'BaconYao',
  likes: ['Movies', 'Programming', 'Basketball'],
  generateGreeter: function() {
    return () => {
      console.log(this.name);
    }
  },
  printLikes: function() {
    this.likes.forEach((like) => {
      console.log(`${this.name} likes ${like}`);
    });
  }
};

person.generateGreeter()();
person.printLikes();





