const ShoppingBasket = require('./shoppingBasket')


describe("shoppingbasket", () => {

  it("returns each ooperation of SB", () => {
    const basket = new ShoppingBasket();

    expect(basket.getTotalPrice()).toBe(0)
  })

  it("returns each ooperation of SB", () => {
    const basket = new ShoppingBasket();
    let item1 = { addItem: () => ("Mars", 4.99), getPrice: () => 4.99 };
    basket.addItem(item1)

    expect(basket.getTotalPrice()).toStrictEqual(4.99);
  })

  it("returns each ooperation of SB", () => {
    const basket = new ShoppingBasket();
    let item1 = { addItem: () => ("Mars", 4.99), getPrice: () => 4.99 };
    let item2 = { addItem: () => ("Mars", 4.99), getPrice: () => 4.99 };
    let item3 = { addItem: () => ("Mars", 4.99), getPrice: () => 4.99 };
    basket.addItem(item1);
    basket.addItem(item2);
    basket.addItem(item3);

    expect(basket.getTotalPrice()).toStrictEqual(14.97);
  })
})