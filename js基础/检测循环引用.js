function hasCircle(obj, set = new Set()) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  if (set.has(obj)) {
    return true;
  }
  set.add(obj);
  for (let value of Object.values(obj)) {
    if (hasCircle(value, set)) {
      return true;
    }
  }
  return false;
}
