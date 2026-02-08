/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const set = new Set(wordDict);
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let word of wordDict) {
      const len = word.length;
      if (len <= i && dp[i - len] && set.has(s.substring(i - len, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};
