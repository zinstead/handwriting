function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const m = num1.length,
    n = num2.length;
  let res = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let product = Number(num1[i]) * Number(num2[j]);
      let sum = product + res[i + j + 1];
      res[i + j + 1] = sum % 10;
      res[i + j] += Math.floor(sum / 10);
    }
  }
  if (res[0] === 0) {
    res = res.slice(1);
  }
  return res.join("").replace(/^0+/, "");
}
