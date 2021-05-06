export const createRange = (rangeSize) => Array.from(Array(rangeSize).keys());

// TODO: better to use a native Array.prototype.flat, this is only for compatibility with jest, butt better to solve it with babel config
export const flatten = (arr) =>
  arr.reduce(
    (acc, el) => (Array.isArray(el) ? acc.concat(flatten(el)) : acc.concat(el)),
    []
  );
