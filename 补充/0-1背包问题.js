function knapsack(weights, values, total) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(total + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= total; j++) {
      if (weights[i - 1] <= j) {
        dp[i][j] = Math.max(
          dp[i - 1][j - weights[i - 1]] + values[i - 1],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][total];
}

function knapsackOpt(weights, values, total) {
  const n = weights.length;
  const dp = new Array(total + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = total; j >= weights[i - 1]; j--) {
      if (weights[i - 1] <= j) {
        dp[j] = Math.max(dp[j - weights[i - 1]] + values[i - 1], dp[j]);
      }
    }
  }
  return dp[total];
}

const weights = [1, 3, 4];
const values = [15, 20, 30];
const W = 4;

console.log(knapsackOpt(weights, values, W)); // 输出 35
