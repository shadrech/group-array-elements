const groupArrayElements = require('.');

describe('groupArrayElements()', () => {
  
  it('processes an array of elements correctly', () => {
    expect(groupArrayElements([1, 2, 3, 4, 5], 3)).toEqual([[1, 2], [3, 4], [5]]);
    
    expect(groupArrayElements([1, 2, 3, 4, 5, 6], 4)).toEqual([[1], [2], [3], [4, 5, 6]]);

    expect(groupArrayElements(['hello', 'to', 'the', 'new', 'world', 'order', 'without', 'trump', 'on', 'twitter', '😱'], 5)).toEqual([
      ['hello', 'to'],
      ['the', 'new'],
      ['world', 'order'],
      ['without', 'trump'],
      ['on', 'twitter', '😱']
    ]);

    expect(groupArrayElements([{ one: 1 }, { two: 2 }, { three: 3 }, { four: 4 }, { five: 5 }, { six: 6 }], 4)).toEqual([
      [{ one: 1 }],
      [{ two: 2 }],
      [{ three: 3 }],
      [{ four: 4 }, { five: 5 }, { six: 6 }],
    ]);
  });

  it('throws an error when given array is empty', () => {
    expect(() => groupArrayElements([], 3)).toThrow('array must not be empty');
  })

  it('throws an error when given n value is not positive', () => {
    expect(() => groupArrayElements([1], -3)).toThrow('n must be a positive integer');
  })

});
