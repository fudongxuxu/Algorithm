/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
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
 * @return {number[]}
 */
var largestValues = function (root) {
  let queue = [];
  let res = [];
  queue.push(root);
  while (queue.length) {
    let n = queue.length;
    let max = -Infinity;
    for (let i = 0; i < n; i++) {
      let node = queue.shift();
      max = Math.max(node.val, max);
      if (node.left) {
        queue.push(node.left);

      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(max)
  }
  return res;
};
// @lc code=end

