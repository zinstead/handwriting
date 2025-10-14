Promise._all = function (iterable) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const result = new Array(iterable.length);
    iterable.forEach((item, i) => {
      Promise.resolve(item).then((value) => {
        result[i] = value;
        count++;
        if (count === iterable.length) {
          resolve(result);
        }
      }),
        (reason) => {
          reject(reason);
        };
    });
  });
};
