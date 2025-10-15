// 不能采用临时变量
function swap(a, b) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}

// 利用了"一个数和自身异或得到0，一个数和0异或得到它本身"
