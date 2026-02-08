/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(true));
  for (let i = n - 2; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
    }
  }

  const res = [];
  function backtrack(i, substrings) {
    if (i === n) {
      res.push([...substrings]);
      return;
    }
    for (let j = i; j < n; j++) {
      if (dp[i][j]) {
        substrings.push(s.substring(i, j + 1));
        backtrack(j + 1, substrings);
        substrings.pop();
      }
    }
  }

  backtrack(0, []);
  return res;
};
