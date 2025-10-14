Function.prototype._call = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(`xxx不是一个函数`);
  }
  // 如果context是null或undefined
  context = context || window;
  const s = Symbol("key");
  context[s] = this;
  const result = context[s](...args);
  delete context[s];
  return result;
};
