const Candy = require('./candy.js')
const ShoppingBasket = require('./shoppingBasket.js')

describe('candy and shoppiong basket', () => {
  it('integration', () => {
    let candy = new Candy("Mars", 4.99);
    let basket = new ShoppingBasket();
    basket.addItem(candy)

    expect(basket.getTotalPrice()).toBe(4.99)
  });
});