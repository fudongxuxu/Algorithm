/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    // DFS
    // if (!root) return false
    // if (root.left === null && root.right === null) {
    //     return targetSum === root.val
    // }
    // return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
    // BFS
    if (!root) return false
    let queueR = [];
    let queueV = [];
    queueR.push(root);

    queueV.push(root.val);

    while (queueR.length > 0) {
        let R = queueR.shift();

        let V = queueV.shift();
        if (R.left === null && R.right === null) {
            if (V === targetSum) {
                return true
            }
            continue
        }
        if (R.left) {
            queueR.push(R.left)

            queueV.push(V + R.left.val);
        }
        if (R.right) {
            queueR.push(R.right)

            queueV.push(V + R.right.val);
        }

    }
    return false
};
// @lc code=end

