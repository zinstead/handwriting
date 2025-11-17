Function.prototype._call = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(`xxx不是一个函数`);
  }
  // 如果context是null或undefined
  context = context || window;
  const fn = Symbol();
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};
