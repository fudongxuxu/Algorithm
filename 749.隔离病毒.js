/*
 * @lc app=leetcode.cn id=749 lang=javascript
 *
 * [749] 隔离病毒
 */

// @lc code=start
/**
 * @param {number[][]} isInfected
 * @return {number}
 */
var containVirus = function (isInfected) {
  let move = [[-1, 0], [0, -1], [0, 1], [1, 0]]
  let map = new Map();
  while (true) {

  }
  function getMaxArea (isInfected) {
    let arr = [];

    for (let i = 0; i < isInfected.length; i++) {
      for (let j = 0; j < isInfected[0].length; j++) {
        if (isInfected[i][j] == 1) {
          let queue = [];
          queue.push([i, j]);
          isInfected[i][j] === -1;
          
          while (queue.length) {
            let c = queue.shift();
            let x = c[0], y = c[1];
            for (let k = 0; k < move.length; i++) {
              let nx = x + move[k][0], ny = y + move[k][1];
              if (0 <= nx && ny >= 0 && nx < isInfected.length && ny < isInfected[0].length) {
                if (isInfected[nx][ny] === 1) {
                  queue.push([nx, ny])
                }
              }
            }
          }
        }


      }
    }
  }
};
// @lc code=end

