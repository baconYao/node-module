// var chatRooms = new Set();

// // Add
// chatRooms.add('Runners');
// chatRooms.add('Runners');
// chatRooms.add('Bikers');

// // Size
// console.log(chatRooms.size);

// // Has
// console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`);

// // Delete
// // chatRooms.delete('Bikers');
// // chatRooms.clear();
// // console.log(chatRooms.size);

// chatRooms.add({name: 'Bacon'});

// // To array
// console.log([...chatRooms]);

// chatRooms.forEach((chatRoom) => {
//   console.log(`Foound chat room: ${chatRoom}`);
// });



// challange area

var movies = new Set();

function addMovie(movieTitle) {
  if(movies.has(movieTitle)) {
    // error
    console.log(`Error! ${movieTitle} already exists!`);
  } else {
    movies.add(movieTitle);    
    console.log(`Success! ${movieTitle} was added!`);
  }
}


addMovie('A New page');
addMovie('District 9');
addMovie('A New page');
