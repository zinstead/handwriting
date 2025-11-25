// 延迟执行
function debounce(fn, options = {}) {
  const { delay = 300 } = options;
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 立即执行(传入immediate参数)
function debounce(fn, options = {}) {
  const { delay = 300, immediate = false } = options;
  let timer = null;

  function debounced(...args) {
    const context = this;
    const callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) {
        fn.apply(context, args);
      }
    }, delay);
    if (callNow) {
      fn.apply(context, args);
    }
  }

  debounced.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };

  return debounced;
}
