/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  if (sum % 2 === 1) {
    return false;
  }
  const target = sum / 2;
  const n = nums.length;
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = target; j >= 1; j--) {
      if (nums[i - 1] <= j) {
        dp[j] = dp[j - nums[i - 1]] || dp[j];
      }
    }
  }
  return dp[target];
};
