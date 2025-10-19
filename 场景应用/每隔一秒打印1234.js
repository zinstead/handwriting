// let实现
function print1234() {
  for (let i = 1; i <= 4; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// 闭包实现
function print1234() {
  for (var i = 1; i <= 4; i++) {
    (function (i) {
      setTimeout(() => {
        console.log(i);
      }, i * 1000);
    })(i);
  }
}
