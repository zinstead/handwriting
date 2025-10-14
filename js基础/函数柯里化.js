function curry(fn) {
  if (typeof fn !== "function") {
    throw new Error("fn不是一个函数");
  }
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...otherArgs) {
      return curried.apply(this, args.concat(otherArgs));
    };
  }
  return curried;
}
