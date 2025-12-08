var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") {
    return "0";
  }
  const m = num1.length,
    n = num2.length;
  const res = new Array(m + n).fill(0);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const int1 = num1[i] - "0",
        int2 = num2[j] - "0";
      const sum = int1 * int2 + res[i + j + 1];
      res[i + j + 1] = sum % 10;
      res[i + j] += Math.floor(sum / 10);
    }
  }
  return res.join("").replace(/^0+/, "");
};
