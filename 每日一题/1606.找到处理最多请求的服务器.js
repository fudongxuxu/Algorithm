/*
 * @lc app=leetcode.cn id=1606 lang=javascript
 *
 * [1606] 找到处理最多请求的服务器
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function (k, arrival, load) {
    let time = new Uint32Array(k), cArr = new Uint32Array(k);
    fdx:
    for (let i = 0; i < arrival.length; i++) {
        if (time.length < k) {
            let t = arrival[i] + load[i];
            cArr[i] = 1;
            time[i] = t
        } else {
            let kc = (i % k);
            let kb = (i % k);
            while (time[kb] > arrival[i]) {
                if (kb < k) kb++
                if (kb === k) kb = 0
                if (kb === kc) continue fdx // 直接继续标记为 label 的循环，跳两层
            }
            time[kb] = arrival[i] + load[i]
            cArr[kb]++
        }
    }
    let max = 0, res = [];
    for (let j = 0; j < cArr.length; j++) {
        if (max < cArr[j]) {
            res = [];
            max = cArr[j]
            res.push(j)
        } else if (max === cArr[j]) {
            res.push(j)
        }
    }
    return res
};
// @lc code=end

