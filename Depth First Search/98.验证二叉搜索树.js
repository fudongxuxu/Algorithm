/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
const helper = (root, lower, upper) => {

}
var isValidBST = function (root) {
    let stack = [];
    let min = -Infinity;
    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop();
        if (root.val <= min) {
            return false
        }
        min = root.val
        root = root.right;
    }
    return true
};

// @lc code=end

