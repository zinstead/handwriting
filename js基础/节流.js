// 定时器版本
function throttle(fn, delay = 300) {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  };
}

// 时间戳版本
function throttle(fn, delay = 300) {
  let preTime = Date.now();
  return function (...args) {
    const curTime = Date.now();
    if (curTime - preTime > delay) {
      preTime = curTime;
      fn.apply(this, args);
    }
  };
}

function _throttle(fn, delay, options = {}) {
  const { leading = true, trailing = true } = options;
  let prev = 0,
    timerId = null;
  let context, args;
  let result;

  function later() {
    prev = leading ? Date.now() : 0;
    timerId = null;
    result = fn.apply(context, args);
    if (!timerId) context = args = null;
  }

  return function (...rest) {
    const now = Date.now();
    if (prev === 0 && !leading) {
      prev = now;
    }
    const remaining = delay - (now - prev);
    context = this;
    args = rest;

    if (remaining <= 0 || remaining > delay) {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      prev = now;
      result = fn.apply(context, args);
      if (!timerId) context = args = null;
    } else if (!timerId && trailing) {
      timerId = setTimeout(later, remaining);
    }

    return result;
  };
}
