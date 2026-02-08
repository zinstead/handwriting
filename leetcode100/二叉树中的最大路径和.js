/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let res = -Infinity;

  function maxPath(root) {
    if (!root) {
      return 0;
    }
    const leftPath = Math.max(maxPath(root.left), 0);
    const rightPath = Math.max(maxPath(root.right), 0);
    const path = root.val + leftPath + rightPath;
    res = Math.max(res, path);
    return Math.max(leftPath, rightPath) + root.val;
  }

  maxPath(root);
  return res;
};
