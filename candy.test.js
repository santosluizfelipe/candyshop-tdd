const Candy = require('./candy')

describe("candy", () => {
  it("returns name of candy", () => {
    const candy = new Candy("Mars", 4.99);
    expect(candy.getName()).toBe("Mars");
    expect(candy.getPrice()).toBe(4.99);
  });
});