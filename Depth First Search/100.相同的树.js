/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // BFS广度优先
    // if (p == null && q == null) {
    //     return true;
    // } else if (p == null || q == null) {
    //     return false;
    // }

    // let queue = [];
    // let queue1 = [];
    // queue.push(p);
    // queue1.push(q);
    // // 输入：p = [1,2], q = [1,null,2]
    // while (queue.length && queue1.length) {

    //     let cur = queue.shift();
    //     let cur1 = queue1.shift();
    //     if (cur.val !== cur1.val) {
    //         return false
    //     }
    //     let left = cur.left, right = cur.right, left1 = cur1.left, right1 = cur1.right;
    //     if ((left === null) ^ (left1 === null)) {
    //         return false
    //     }
    //     if ((right === null) ^ (right1 === null)) {
    //         return false
    //     }
    //     if (left) {
    //         queue.push(left)
    //     }
    //     if (right) {
    //         queue.push(right)
    //     }
    //     if (left1) {
    //         queue1.push(left1)
    //     }
    //     if (right1) {
    //         queue1.push(right1)
    //     }
    // }

    // return queue.length === 0 && queue1.length === 0
    // DFS深度优先
    if (p === null && q === null) {
        return true
    } else if (p === null || q === null) {
        return false
    } else if (p.val !== q.val) {
        return false
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
};
// @lc code=end

