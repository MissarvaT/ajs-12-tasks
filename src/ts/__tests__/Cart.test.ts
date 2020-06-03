  
import Cart from '../service/Cart';
import Movie from '../domain/Movie'

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('item is added to the cart', () => {
    const cart = new Cart();
    const inception = new Movie (1, 'Inception', 250, 2010, 'USA', 'Your mind is a crime scene', 'thriller', 120);
    cart.add(inception);
  
    expect(cart.items).toEqual([{
        id: 1,
        name: 'Inception',
        price: 250,
        year: 2010,
        country: 'USA',
        motto: 'Your mind is a crime scene',
        genre: 'thriller',
        duration: 120 }]);
  });

  test('returns total sum of purchase', () => {
    const cart = new Cart();
    const inception = new Movie (1, 'Inception', 250, 2010, 'USA', 'Your mind is a crime scene', 'thriller', 120);
    cart.add(inception);
  
    expect(cart.totalSum()).toBe(250);
  });

  test('returns sum of purchase with discount', () => {
    const cart = new Cart();
    const inception = new Movie (1, 'Inception', 250, 2010, 'USA', 'Your mind is a crime scene', 'thriller', 120);
    cart.add(inception);
  
    expect(cart.finalSum(10)).toBe(225);
  });

  test('deletes one of the items', () => {
    const cart = new Cart();
    const inception = new Movie (1, 'Inception', 250, 2010, 'USA', 'Your mind is a crime scene', 'thriller', 120);
    const mask = new Movie (2, 'Mask', 200, 1995, 'USA', 'Blablabla', 'comedy', 120);
    const pulpFiction = new Movie (3, 'Pulp Fiction', 250, 1994, 'USA', 'Never mind', 'crime', 120);
    cart.add(inception);
    cart.add(mask);
    cart.add(pulpFiction);

    cart.deleteItem(2);
    expect(cart.items).toEqual([{
        id: 1,
        name: 'Inception',
        price: 250,
        year: 2010,
        country: 'USA',
        motto: 'Your mind is a crime scene',
        genre: 'thriller',
        duration: 120 },
        {
        id: 3,
        name: 'Pulp Fiction',
        price: 250,
        year: 1994,
        country: 'USA',
        motto: 'Never mind',
        genre: 'crime',
        duration: 120 }]);
  });