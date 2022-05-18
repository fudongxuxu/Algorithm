/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// var flatten = function (root) {
//     // let firstTree = new TreeNode(0);
//     // let arr = []
//     // function firstdtOrder(root) {
//     //     if (!root) return null;
//     //     arr.push(root)
//     //     firstdtOrder(root.left);
//     //     firstdtOrder(root.right);
//     // }
//     // firstdtOrder(root)
//     // for (let i = 1; i < arr.length; i++) {
//     //     let pre = arr[i - 1], next = arr[i]
//     //     pre.left = null;
//     //     pre.right = next
//     // }
//     if (!root) return;
//     let stack = [];
//     stack.push(root);
//     let pre = null
//     while (stack.length > 0) {
//         let cur = stack.pop();
//         if (pre) {
//             pre.left = null
//             pre.right = cur
//         }
//         let left = cur.left, right = cur.right;
//         if (right) {
//             stack.push(right)
//         }
//         if (left) {
//             stack.push(left)
//         }
//         pre = cur
//     }
// };
var flatten = function (root) {
    let cur = root;
    while (cur !== null) {
        if (cur.left !== null) {
            let next = cur.left;
            let pre = next;
            while (pre.right !== null) {
                pre = pre.right;
            }
            pre.right = cur.right
            cur.left = null;
            cur.right = next;
        }
        cur = cur.right
    }
};
// @lc code=end

