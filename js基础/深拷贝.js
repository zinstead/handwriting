function cloneDeep(obj, map = new Map()) {
  // 只考虑基本类型、数组、普通对象，不考虑函数、map、set、Date、RegExp等特殊对象
  // 解决循环引用问题，避免一直递归下去
  // 这里使用WeakMap没有用；只有当WeakMap的生命周期长于它所引用的对象时，才能发挥作用，经典例子是缓存；
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  if (map.has(obj)) {
    return map.get(obj);
  }
  const newObj = Array.isArray(obj) ? [] : {};
  map.set(obj, newObj);
  Object.keys(obj).forEach((key) => {
    newObj[key] = cloneDeep(obj[key], map);
  });
  return newObj;
}
