/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
var findFrequentTreeSum = function (root) {
  let map = new Map();

  function dsf (root) {
    if (!root) {
      return 0
    }
    let c = root.val + dsf(root.left) + dsf(root.right);
    map.set(c, 1);
  }
  console.log(map);
};
// @lc code=end

