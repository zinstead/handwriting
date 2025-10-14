Promise._any = function (iterable) {
  return new Promise((resolve, reject) => {
    let count = 0;
    const result = new Array(iterable.length);
    iterable.forEach((item, i) => {
      Promise.resolve(item).then((value) => {
        resolve(value);
      }),
        (reason) => {
          result[i] = reason;
          count++;
          if (count === iterable.length) {
            reject(new AggregateError(result));
          }
        };
    });
  });
};
