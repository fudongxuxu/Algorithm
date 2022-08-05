/*
 * @lc app=leetcode.cn id=592 lang=javascript
 *
 * [592] 分数加减运算
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {
  let fz = 0, fm = 1;
  let index = 0, n = expression.length;

  while (index < n) {
    let fz1 = 0, flag = 1;

    if (expression[index] == '-' || expression[index] == '+') {
      flag = expression[index] == "-" ? -1 : 1;
      index++;

    }

    while (index < n && isDigit(expression[index])) {
      fz1 = fz1 * 10 + expression[index].charCodeAt() - '0'.charCodeAt();

      index++;
      console.log(isDigit(expression[index]),expression[index])

    }
    fz1 = fz1 * flag;
    index++;
    let fm1 = 0;
    while (index < n && isDigit(expression[index])) {
      fm1 = fm1 * 10 + expression[index].charCodeAt() - '0'.charCodeAt();
      index++;

    }
    fz = fz * fm1 + fz1 * fm;
    fm *= fm1;
  }

  if (fz === 0) {
    return '0/1'
  }

  const g = gcd(Math.abs(fz), fm);

  return Math.floor(fz / g) + "/" + Math.floor(fm / g);

}
const gcd = (a, b) => {
  let remainder = a % b;
  while (remainder !== 0) {
      a = b;
      b = remainder;
      remainder = a % b;
  }
  return b;
};

const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
}
fractionAddition("-5/2+10/3+7/9")


// @lc code=end

