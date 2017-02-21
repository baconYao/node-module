// var locations = [];

// locations.push({
//   name: 'Taiwan',
//   weater: 22
// });

// locations.push({
//   name: 'USA',
//   weater: 52
// });

// for(let location of locations) {
//   console.log(`It's ${location.weater} in ${location.name}`);
// }


function averageGrade (...grades) {
  var total = 0;
  for(let grade of grades) {
    total += grade;
  }
  return (total / grades.length);
}

var total = averageGrade(1, 44, 99);
console.log(total);


