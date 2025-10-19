function hasLoop(obj) {
  const set = new Set();

  function detect(obj) {
    if (typeof obj !== "object" || obj === null) {
      return false;
    }
    if (set.has(obj)) {
      return true;
    }
    set.add(obj);
    return Object.values(obj).some(detect);
  }

  return detect(obj);
}
