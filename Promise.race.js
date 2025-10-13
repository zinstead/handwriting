Promise._race = function (iterable) {
  return new Promise((resolve, reject) => {
    iterable.forEach((item) => {
      Promise.resolve(item).then(resolve, reject);
    });
  });
};
