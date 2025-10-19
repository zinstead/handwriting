function subtract(a, b) {
  const res = [];
  let borrow = 0;
  for (let i = a.length - 1, j = b.length - 1; i >= 0; i--, j--) {
    const num1 = a[i];
    const num2 = j >= 0 ? b[j] : 0;
    let diff = num1 - num2 - borrow;
    if (diff < 0) {
      diff += 10;
      borrow = 1;
    }
    res.push(diff);
  }
  return res.reverse().join("").replace(/^0+/, "");
}
