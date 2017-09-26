function createBookshop (inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTile(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  { title: 'Harry Portter', price: 10 },
  { title: 'Javascript', price: 15 }
];

const bookShop = createBookshop(inventory);

var value = bookShop.inventoryValue();
console.log(value);
var price = bookShop.priceForTile('Harry Potter');
console.log(value);
