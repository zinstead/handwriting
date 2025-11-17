function compare(obj1, obj2, map = new Map()) {
  if (obj1 === obj2) {
    return true;
  }
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }
  // 处理循环引用
  if (map.has(obj1)) {
    return map.get(obj1) === obj2;
  }
  map.set(obj1, obj2);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  const set = new Set(keys2);
  for (let key of keys1) {
    if (!set.has(key)) {
      return false;
    }
    if (!compare(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
