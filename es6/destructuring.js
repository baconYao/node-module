// var array = ['first', 'second', 'third'];
// var [a, b, c] = array;

// console.log(a, b, c);



var todo = {
  description: 'ES6 test',
  completed: false
}
// var {description: message, completed} = todo;
// console.log(message);
// console.log(completed);

function getTodoStatus({completed}) {
  if(typeof completed === 'boolean') {
    return [`Todo is ${completed ? '' : 'not '}completed.`];
  } else {
    return [undefined, {error: 'INVALID_TODO_ITEM'}];
  }
};

var [res, err] = getTodoStatus(todo);
if(err) {
  console.log(err.error);
} else {
  console.log(res);
}
