function findLastCount() {
  const arr = new Array(30).fill(0).map((_, i) => i + 1);
  let i = 0;
  while (arr.length > 1) {
    i = (i + 2) % arr.length;
    arr.splice(i, 1);
  }
  return arr[0];
}
