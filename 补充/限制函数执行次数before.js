function before(fn, time) {
  // 超过执行次数，返回最后一次的结果
  let result;
  return function (...args) {
    if (time-- > 0) {
      result = fn.apply(this, args);
    }
    return result;
  };
}
