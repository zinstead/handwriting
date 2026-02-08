/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const n = heights.length;
  const stack = [];
  let maxArea = 0;
  for (let i = 0; i <= n; i++) {
    while (
      stack.length &&
      (heights[i] < heights[stack[stack.length - 1]] || i === n)
    ) {
      const j = stack.pop();
      const width = stack.length ? i - stack[stack.length - 1] - 1 : i;
      maxArea = Math.max(maxArea, heights[j] * width);
    }
    stack.push(i);
  }
  return maxArea;
};
