'use strict';

function iterable(it) {
  return {
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
  };
}

module.exports = iterable;
