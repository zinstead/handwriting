function splitNumber(num) {
  const [left, right] = String(num).split(".");
  const arr = [];
  let count = 0;
  for (let i = left.length - 1; i >= 0; i--) {
    count++;
    arr.push(left[i]);
    if (count % 3 === 0 && i !== 0) {
      arr.push(",");
    }
  }
  return arr.reverse().join("") + "." + right;
}

function splitNumber2(num) {
  return new Number(num).toLocaleString();
}
