/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
//  [2,null,3,null,4,null,5,null,6]
var minDepth = function (root) {
    let getMin = function (root) {
        if (!root) return 0;
        if (root.left && root.right) {
            return Math.min(getMin(root.left) + 1, getMin(root.right) + 1);
        }
        if (root.left)
            return getMin(root.left) + 1
        if (root.right)
            return getMin(root.right) + 1
        return 1
    }

    return getMin(root)
};
// @lc code=end

