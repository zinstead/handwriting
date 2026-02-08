/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length,
    n = nums2.length;

  function findKth(k) {
    let i = 0,
      j = 0;
    while (true) {
      if (i >= m) {
        return nums2[j + k - 1];
      }
      if (j >= n) {
        return nums1[i + k - 1];
      }
      if (k === 1) {
        return Math.min(nums1[i], nums2[j]);
      }
      const offset = Math.floor(k / 2) - 1;
      const newi = Math.min(i + offset, m - 1);
      const newj = Math.min(j + offset, n - 1);
      if (nums1[newi] < nums2[newj]) {
        k -= newi - i + 1;
        i = newi + 1;
      } else {
        k -= newj - j + 1;
        j = newj + 1;
      }
    }
  }

  const total = m + n;
  if (total % 2 === 1) {
    return findKth(Math.floor(total / 2) + 1);
  } else {
    return (
      (findKth(Math.floor(total / 2)) + findKth(Math.floor(total / 2) + 1)) / 2
    );
  }
};
