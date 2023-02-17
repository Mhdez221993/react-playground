function drinkEach(fn, arr) {
  arr.forEach((beverage) => {
    fn(beverage);
  });
}

test('registration applies correctly to orange La Croix', () => {
  const drink = jest.fn();
  drinkEach(drink, ['lemon', 'octopus']);
  expect(drink).toHaveBeenNthCalledWith(1, 'lemon');
  expect(drink).toHaveBeenNthCalledWith(2, 'octopus');
});