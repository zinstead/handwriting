Function.prototype._apply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error(`xxx不是一个函数`);
  }
  context = context || window;
  args = args || [];
  const fn = Symbol();
  context[fn] = this;
  const res = context[fn](...args);
  delete context[fn];
  return res;
};
