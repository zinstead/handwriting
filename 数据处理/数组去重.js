// 1.Set
function unique(arr) {
  return Array.from(new Set(arr));
}

// 2.哈希表
function unique(arr) {
  const map = {};
  const result = [];
  for (const ele of arr) {
    if (!map[ele]) {
      map[ele] = true;
      result.push(ele);
    }
  }
  return result;
}
