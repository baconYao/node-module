let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => {
    console.log('finally finished');
  })
  .then(() => { 
    console.log('i was runn too');
  })
  .catch( () => {
    console.log('uh no');
  });  