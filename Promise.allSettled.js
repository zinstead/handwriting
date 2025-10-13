Promise._allSettled = function (iterable) {
  return new Promise((resolve) => {
    let count = 0;
    const result = new Array(iterable.length);
    const handleSettled = (res, index) => {
      result[index] = res;
      count++;
      if (count === iterable.length) {
        resolve(result);
      }
    };
    iterable.forEach((item, i) => {
      Promise.resolve(item).then((value) => {
        handleSettled({ status: "fulfilled", value }, i);
      }),
        (reason) => {
          handleSettled({ status: "rejected", reason }, i);
        };
    });
  });
};
