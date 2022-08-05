/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];
  stack.push(asteroids[0])
  for (let i = 1; i < asteroids.length; i++) {
    if (stack[stack.length - 1] < 0 && asteroids[i] < 0) {
      stack.push(asteroids[i])

    }
    if (stack[stack.length - 1] > 0 && asteroids[i] > 0) {
      stack.push(asteroids[i])

    }
    if (stack[stack.length - 1] < 0 && asteroids[i] > 0){
      
    }

  }
  console.log(stack)
};
asteroidCollision([5, 10, -5])
// @lc code=end

