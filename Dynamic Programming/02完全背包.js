
var weight = [1, 3, 4];
var value = [15, 20, 30];
function weightBag(weight, val, bag) {
    let dp = new Array(bag + 1).fill(0);
    for (let i = 0; i < weight.length; i++) {
        for (let j = 1; j <= bag; j++) {
            if (j >= weight[i]) {
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + val[i])
            }
        }
        console.log(dp);
    }
}
weightBag(weight, value, 4)