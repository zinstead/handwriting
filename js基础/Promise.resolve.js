Promise._resolve = function (value) {
  if (typeof value === Promise) {
    return value;
  }
  return new Promise((resolve, reject) => {
    if (typeof value.then === "function") {
      value.then(resolve, reject);
      return;
    }
    resolve(value);
  });
};
