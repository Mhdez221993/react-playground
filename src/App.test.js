const registry = [];

// A function for registering a new beverage
function register(beverage) {
  registry.push(beverage);
}

// A function for applying a given function to all registered beverages
function applyToAll(fn) {
  registry.forEach((beverage) => {
    fn(beverage);
  });
}

// A class representing a LaCroix beverage
class LaCroix {
  constructor(flavor) {
    this.flavor = flavor;
  }
}

test('registration applies correctly to orange La Croix', () => {
  const beverage = new LaCroix('orange');
  register(beverage);
  const f = jest.fn();
  applyToAll(f);
  expect(f).toHaveBeenCalledWith(beverage);
});