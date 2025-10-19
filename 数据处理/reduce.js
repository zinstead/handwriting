Array.prototype._reduce = function (callback, initValue) {
  const hasInit = initValue === undefined;
  if (!hasInit && this.length === 0) {
    throw new Error("没有初始值，且数组为空");
  }
  let i = hasInit ? 0 : 1;
  pre = hasInit ? initValue : this[0];
  for (; i < this.length; i++) {
    pre = callback(pre, this[i], i, this);
  }
  return pre;
};
