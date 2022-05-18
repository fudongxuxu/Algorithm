/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
    if (!root) return true
    function getTreeMaxHight(root) {
        if (root === null) return 0
        return Math.max(getTreeMaxHight(root.left) + 1, getTreeMaxHight(root.right) + 1);
    }
    function jude(root) {
        // let rigtTree = 0
        // let leftTree = 0
        // if (left.left) {
        //     leftTree = getTreeMaxHight(root.left);

        // }
        // if (right.right) {
        //     rigtTree = getTreeMaxHight(root.right);
        // }
        if (!root) return true
        if (Math.abs(getTreeMaxHight(root.left) - getTreeMaxHight(root.right)) > 1) {
            return false
        }

        return jude(root.left) && jude(root.right)
    }
    // let leftTree = getTreeMaxHight(root.left);
    // let rigtTree = getTreeMaxHight(root.right);
    // console.log(leftTree, rigtTree);
    return jude(root)
};
// @lc code=end

