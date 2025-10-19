function printRedAndGreen() {
  print("红", 3000)
    .then(() => print("绿", 1000))
    .then(() => print("黄", 2000))
    .then(() => printRedAndGreen());
}

function print(content, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(content);
      resolve();
    }, delay);
  });
}

printRedAndGreen();

// 回调形式
function printRedAndGreen() {
  print("红", 3000, () => {
    print("绿", 1000, () => {
      print("黄", 2000, () => {
        printRedAndGreen();
      });
    });
  });
}

function print(content, delay, cb) {
  setTimeout(() => {
    console.log(content);
    cb();
  }, delay);
}

printRedAndGreen();
