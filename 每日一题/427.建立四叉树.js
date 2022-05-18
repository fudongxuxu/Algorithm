/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] 建立四叉树
 */

// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  function dsf (grid, i, j, len) {

    if (len === 1) {
      return new Node(grid[i][j], 1)
    }

    if (judge(grid, i, j, len)) {
      console.log(i, j)
      return new Node(grid[i][j], 1)
    }
    let node = new Node(1, 0);
    node.topLeft = dsf(grid, i, j, len / 2);
    node.topRight = dsf(grid, i, j + len / 2, len / 2);
    node.bottomLeft = dsf(grid, i + len / 2, j, len / 2);
    node.bottomRight = dsf(grid, i + len / 2, j + len / 2, len / 2);
    return node
  }
  function judge (grid, i, j, len) {
    let flag = grid[i][j];
    for (let x = i; x < len + i; x++) {
      for (let y = j; y < len + j; y++) {
        if (flag !== grid[x][y]) {
          return false;
        }
      }
    }
    return true
  }
  return dsf(grid, 0, 0, grid.length)
};
// @lc code=end

