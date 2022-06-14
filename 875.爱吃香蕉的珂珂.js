/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let getTime = function (piles, speed) {
    let time = 0;
    for (let k of piles) {
      time += Math.floor((k + speed - 1) / speed);

    }
    return time;
  }
  let low = 1, high = 0;
  for (let j of piles) {
    high = Math.max(high, j);
  }
  let k = high
  while (low <= high) {
    let speed = low + Math.floor((high - low) / 2);
    let time = getTime(piles, speed);
    if (h < time) {
      k = speed;
      low = speed + 1
    }
    if (h > time) {
      high = speed - 1
    }
    if (h = time) {
      return speed
    }
  }
  return k
};
// @lc code=end

