'use strict';

function iterable_(it) {
  return {
    [Symbol.iterator]() {
      return it;
    },
    * map() {
      const args = Array.from(arguments);
      for (const i of it) {
        yield Array.prototype.map.apply([i], args)[0];
      }
    },
    * filter() {
      const args = Array.from(arguments);
      for (const i of it) {
        const result = Array.prototype.filter.apply([i], args);
        if (result.length) {
          yield result[0];
        }
      }
    },
    every() {
      const args = Array.from(arguments);
      for (const i of it) {
        const result = Array.prototype.every.apply([i], args);
        if (!result) {
          return false;
        }
      }
      return true;
    },
    some() {
      const args = Array.from(arguments);
      for (const i of it) {
        const result = Array.prototype.some.apply([i], args);
        if (result) {
          return true;
        }
      }
      return false;
    },
  };
}

function wrap(it) {
  const iter = iterable_(it);

  return {
    [Symbol.iterator]() {
      return it;
    },
    map() {
      const args = Array.from(arguments);
      return wrap(iter.map.apply(it, args));
    },
    filter() {
      const args = Array.from(arguments);
      return wrap(iter.filter.apply(it, args));
    },
    every: iter.every.bind(iter),
    some: iter.some.bind(iter),
  };
}

function iterable(it) {
  return wrap(it);
}

module.exports = iterable;
