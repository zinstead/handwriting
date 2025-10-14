Function.prototype._apply = function (context, args) {
  if (typeof this !== "function") {
    throw new Error(`xxx不是一个函数`);
  }
  context = context || window;
  const s = Symbol("key");
  context[s] = this;
  // args是一个类数组对象，或者是null、undefined
  let result;
  if (Array.isArray(args)) {
    result = context[s](...args);
  } else if (args === null || args === undefined) {
    result = context[s]();
  } else {
    throw new Error("args不是一个类数组对象");
  }
  delete context[s];
  return result;
};
