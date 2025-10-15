function unorderArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const j = Math.floor(Math.random() * (arr.length - i)) + i;
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function unorderArray2(arr) {
  // 倒序更简单
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // 解构赋值更简单，但是多创建一个临时数组，时间更慢
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
