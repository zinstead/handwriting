function subtract(num1, num2) {
  let negative = false;
  if (
    num1.length < num2.length ||
    (num1.length === num2.length && num1 < num2)
  ) {
    negative = true;
    const temp = num1;
    num1 = num2;
    num2 = temp;
  }
  const m = num1.length,
    n = num2.length;
  const res = new Array(m).fill(0);
  let borrow = 0;
  for (let i = m - 1, j = n - 1; i >= 0 || j >= 0; i--, j--) {
    const int1 = num1[i] - "0";
    const int2 = j >= 0 ? num2[j] - "0" : 0;
    let gap = int1 - int2 + borrow;
    if (gap < 0) {
      gap += 10;
      borrow = -1;
    } else {
      borrow = 0;
    }
    res[i] = gap;
  }
  const val = res.join("").replace(/^0+/, "") || "0";
  return negative ? "-" + val : val;
}

console.log(subtract("123", "45"));
