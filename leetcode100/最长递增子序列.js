/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const arr = [];
  for (let num of nums) {
    if (arr.length && num <= arr[arr.length - 1]) {
      const i = search(arr, num);
      arr[i] = num;
    } else {
      arr.push(num);
    }
  }
  return arr.length;
};

function search(nums, target) {
  let left = 0,
    right = nums.length - 1;
  let res;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      res = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return res;
}
