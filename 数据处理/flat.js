Array.prototype._flat = function (depth = 1) {
  if (depth === 0) {
    return this.slice();
  }
  return this.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      pre.push(...cur._flat(depth - 1));
    } else {
      pre.push(cur);
    }
    return pre;
  }, []);
};
