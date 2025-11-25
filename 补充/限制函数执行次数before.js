function before(fn, count) {
  let temp = count;
  return function (...args) {
    if (temp > 0) {
      temp--;
      return fn.apply(this, args);
    }
  };
}
