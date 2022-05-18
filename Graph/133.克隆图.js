/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    let hashMap = new Map();
    function dfs(node) {
        if (!node) return;
        let nNode = new Node(node.val);
        hashMap.set(node, nNode);
        (node || []).neighbors.forEach(el => {
            if (!hashMap.has(el)) {
                dfs(el)
            }
            nNode.neighbors.push(hashMap.get(el))
        });
    }
    dfs(node)
    return hashMap.get(node)
};
// @lc code=end

