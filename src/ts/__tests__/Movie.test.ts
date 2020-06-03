import Movie from '../domain/Movie';

test('creates new movie item', () => {
    const pulpFiction = new Movie (3, 'Pulp Fiction', 250, 1994, 'USA', 'Never mind', 'crime', 120);
  
    expect(pulpFiction).toEqual({
        id: 3,
        name: 'Pulp Fiction',
        price: 250,
        year: 1994,
        country: 'USA',
        motto: 'Never mind',
        genre: 'crime',
        duration: 120 });
  });