var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15  },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9  },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5  }
];

// var filteredProducts = [];

// for(var i = 0; i < products.length; i++) {
//   if(products[i].type === 'fruit') {
//     filteredProducts.push(products[i]);
//   }
// }

// console.log(filteredProducts);


// var output = products.filter((product) => {
//   return product.type === 'vegetable';
// });

// console.log(output);


var conditionOutput = products.filter((product) => {
  return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

console.log(conditionOutput);



var post = { id: 4, title: 'New Post'};
var comments = [
  {postId: 4, content: 'djasbn'},
  {postId: 3, content: '12315'},
  {postId: 4, content: '!&#%$*!@'}
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
};

console.log(commentsForPost(post, comments));
