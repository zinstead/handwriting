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

// 带有并发限制，按照顺序执行
Promise._allWithLimit = function (iterable, limit) {
  return new Promise((resolve, reject) => {
    let completed = 0,
      active = 0,
      index = 0;
    const results = new Array(iterable.length);

    function run() {
      if (completed === iterable.length) {
        resolve(results);
        return;
      }
      while (active < limit && index < iterable.length) {
        const currentIdx = index;
        const task = iterable[currentIdx];
        active++;
        index++;
        Promise.resolve(task)
          .then((value) => {
            results[currentIdx] = value;
          })
          .catch((reason) => reject(reason))
          .finally(() => {
            completed++;
            active--;
            run();
          });
      }
    }

    run();
  });
};

const tasks = new Array(10).fill(0).map(
  (_, i) =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(i);
        resolve(i);
      }, 1000 - i * 50);
    })
);
Promise._allWithLimit(tasks, 3).then(console.log);
