function compose(...fns) {
  return function (...args) {
    let res = args;
    for (let i = fns.length - 1; i >= 0; i--) {
      if (Array.isArray(res)) {
        res = fns[i](...res);
      } else {
        res = fns[i](res);
      }
    }
    return res;
  };
}

function fn1(srt1, srt2) {
  return `hello ${srt1} ${srt2}`;
}

function fn2(str) {
  return str.toUpperCase();
}

function fn3(str) {
  return str.split(" ");
}

const fn = compose(fn3, fn2, fn1);
console.log(fn("shopee", "team"));
