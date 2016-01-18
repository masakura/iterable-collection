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
});
