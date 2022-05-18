/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  let arrive = new Set();
  let m1 = heights.length;
  let n1 = heights[0].length;
  let position = [[-1, 0], [0, -1], [0, 1], [1, 0]];
  let pacific = new Array(m1).fill(0).map(() => new Array(n1).fill(0));
  let atlantic = new Array(m1).fill(0).map(() => new Array(n1).fill(0));

  let bfs = (m, n, ocean) => {
    if (ocean[m][n]) {
      return;
    }
    let queue = [];
    queue.push([m, n]);
    ocean[m][n] = true;
    while (queue.length) {
      let v = queue.shift();
      for (let k of position) {
        let newX = v[0] + k[0], newY = v[1] + k[1];

        if (newX >= 0 && newX < m1 && newY >= 0 && newY < n1 && (heights[newX][newY] >= heights[v[0]][v[1]]) && !ocean[newX][newY]) {
          ocean[newX][newY] = true;
          queue.push([newX, newY]);
        }
      }
    }
  }
  for (let i = 0; i < m1; i++) {
    bfs(i, 0, pacific);
  }
  for (let j = 1; j < n1; j++) {
    bfs(0, j, pacific);
  }
  for (let i = 0; i < m1; i++) {
    bfs(i, n1 - 1, atlantic);
  }
  for (let j = 0; j < n1 - 1; j++) {
    bfs(m1 - 1, j, atlantic);
  }
  let res = []
  for (let i = 0; i < m1; i++) {
    for (let j = 0; j < n1; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        res.push([i, j])
      }
    }
  }
  return res
};
pacificAtlantic([[2,1],[1,2]])
// @lc code=end

