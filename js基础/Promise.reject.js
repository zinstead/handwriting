Promise._reject = function (reason) {
  return new Promise((_, reject) => {
    reject(reason);
  });
};
