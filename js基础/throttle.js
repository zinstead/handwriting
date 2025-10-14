// 定时器版本
function throttle(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}

// 时间戳版本
function throttle(fn, delay = 300) {
  let preTime = Date.now();
  return function (...args) {
    const curTime = Date.now();
    if (curTime - preTime > delay) {
      fn.apply(this, args);
      preTime = curTime;
    }
  };
}
