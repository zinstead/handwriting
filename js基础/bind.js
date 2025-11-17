Function.prototype._bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error(`xxx不是一个函数`);
  }
  context = context || window;
  args = args || [];
  const fn = this;
  return function (...otherArgs) {
    return fn.apply(context, args.concat(otherArgs));
  };
};
