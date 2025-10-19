function add(num1, num2) {
  let carry = 0,
    sum = 0;
  // 用数组存储代替字符串拼接，效率更高
  const res = [];
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >= 0 || j >= 0;
    i--, j--
  ) {
    let m = i >= 0 ? Number(num1[i]) : 0;
    let n = j >= 0 ? Number(num2[j]) : 0;
    sum = m + n + carry;
    res.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry > 0) {
    res.push(carry);
  }
  return res.reverse().join("");
}
