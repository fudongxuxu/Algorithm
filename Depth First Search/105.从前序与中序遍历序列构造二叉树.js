/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let preIndex = 0;

    let helper = function (preorder, inorder, i, j) {
        if (i > j) {
            return null
        }
        let node = new TreeNode(preorder[preIndex++]);
        if (j === i) {
            return node
        }
        let index = 0;
        for (let start = i; start <= j; start++) {
            if (inorder[start] === node.val) {
                index = start
                break;
            }
        }
        node.left = helper(preorder, inorder, i, index - 1)
        node.right = helper(preorder, inorder, index + 1, j)
        return node
    }
    return helper(preorder, inorder, 0, preorder.length - 1)

};
// @lc code=end

