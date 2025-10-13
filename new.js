function _new(constructor, ...args) {
  if (typeof constructor !== "function") {
    // 抛出异常和返回异常，是不同的，抛出异常会终止程序
    throw new Error("constructor不是一个构造函数");
  }
  const instance = Object.create(constructor.prototype);
  const result = constructor.apply(instance, args);
  // 判断是否为对象，有点复杂
  if (
    (typeof result === "object" && result !== null) ||
    typeof result === "function"
  ) {
    return result;
  }
  return instance;
}
