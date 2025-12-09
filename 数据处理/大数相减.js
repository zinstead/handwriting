function subtract(num1, num2) {
  let isNegative = false;
  if (
    num1.length < num2.length ||
    (num1.length === num2.length && num1 < num2)
  ) {
    isNegative = true;
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  const m = num1.length,
    n = num2.length;
  const res = new Array(m).fill(0);
  let borrow = 0;
  for (let i = m - 1, j = n - 1; i >= 0; i--, j--) {
    const int1 = num1[i] - "0";
    const int2 = j >= 0 ? num2[j] - "0" : 0;
    let diff = int1 - int2 - borrow;
    if (diff < 0) {
      borrow = 1;
      diff += 10;
    } else {
      borrow = 0;
    }
    res[i] = diff;
  }
  const val = res.join("").replace(/^0+/, "");
  return isNegative ? "-" + val : val;
}

console.log(subtract("100", "11"));
