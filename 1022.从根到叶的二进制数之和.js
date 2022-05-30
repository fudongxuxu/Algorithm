/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
 * @return {number}
 */
  var sumRootToLeaf = function(root) {
    const dfs = (root, val) => {
        if (!root) {
            return 0;
        }
        val = (val << 1) | root.val;
        if (!root.left&& !root.right) {
            return val;
        }
        return dfs(root.left, val) + dfs(root.right, val);
    }
    return dfs(root, 0);
};


// @lc code=end

