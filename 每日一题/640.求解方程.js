/*
 * @lc app=leetcode.cn id=640 lang=javascript
 *
 * [640] 求解方程
 */

// @lc code=start
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  let i = 0, n = equation.length;
  let v = 0, s = 0, f = 1;
  while (i < n) {
    if (equation[i] == '=') {
      f = -1;
      i++
      continue
    }
    let f1 = f;
    if (equation[i] == '-') {
      f1 = -f;
      i++
    }
    if (equation[i] == "+") {
      f1 = f;
      i++
    }
    let c = 0, falg = false
    while (i < n && isNumber(equation[i])) {
      c = 10 * c + (equation[i].charCodeAt(0) - "0".charCodeAt(0));
      falg = true
      i++
    }
    if (i < n && equation[i] == 'x') {
      if (falg) {
        s += c * f1;

      } else {
        s += f1;
      }
      i++;
    } else {
      v += c * f1;
    }
  }
  if (s == 0) {
    return v == 0 ? "Infinite solutions" : "No solution"
  }

  return "x=" + (-v / s);
  function isNumber (a) {
    return parseFloat(a).toString() == 'NaN' ? false : true;
  }
};
solveEquation("2x+1+3=x-2+1")
// @lc code=end

