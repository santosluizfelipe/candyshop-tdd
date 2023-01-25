const Candy = require("./candy");
class ShoppingBasket {
  constructor() {
    this.basket = [];
  }
  addItem(candy) {
    this.basket.push(candy);
  }
  getBasket() {
    return this.basket;
  }
  getTotalPrice() {
    let total = 0;
    this.basket.forEach((n) => {
      total += n.getPrice();
    });
    return total;
  }
}
module.exports = ShoppingBasket;