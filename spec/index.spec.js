'use strict';

const iterable = require('../index.js');

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

describe('index.js', () => {
  describe('map', () => {
    it('simple', () => {
      const iter = iterable(range(0, 2));

      const result = iter.map(i => i * 2);

      expect(Array.from(result)).toEqual([0, 2, 4]);
    });
  });

  describe('filter', () => {
    it('simple', () => {
      const iter = iterable(range(0, 2));

      const result = iter.filter(i => i % 2);

      expect(Array.from(result)).toEqual([1]);
    });
  });

  describe('every', () => {
    it('0..2 all greater and equal 0', () => {
      const iter = iterable(range(0, 2));

      const result = iter.every(i => i >= 0);

      expect(result).toBeTruthy();
    });
  });

  describe('some', () => {
    it('0..2 some greater than 1', () => {
      const iter = iterable(range(0, 2));

      const result = iter.some(i => i > 1);

      expect(result).toBeTruthy();
    });
  });

  it('combine', () => {
    const iter = iterable(range(0, 3));

    const result = iter
            .map(i => i * i)
            .filter(i => i >= 4)
            .some(i => i % 2);

    expect(result).toBeTruthy();
  });
});
