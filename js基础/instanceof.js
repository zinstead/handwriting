function _instanceof(obj, constructor) {
  if (typeof constructor !== "function") {
    throw new Error("constructor不是一个构造函数");
  }
  const target = constructor.prototype;
  let proto = Object.getPrototypeOf(obj);
  while (proto) {
    if (proto === target) {
      return true;
    }
    proto = Object.getPrototypeOf(obj);
  }
  return false;
}
