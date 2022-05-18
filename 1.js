var platesBetweenCandles = function (s, queries) {
    let leftArr = [], rightArr = [], plateArr = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            count++;
        }
        plateArr[i] = count
    }
    let candleL = -1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            candleL = i;
        }
        leftArr[i] = candleL
    }
    let candleR = -1;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '|') {
            candleR = i;
        }
        rightArr[i] = candleR
    }
    let res = []
    for (let i of queries) {
        let left = leftArr[i[1]], right = rightArr[i[0]];
        let c = left === -1 || right === -1 || right >= left ? 0 : plateArr[left] - plateArr[right];
        res.push(c)
    }
    console.log(res);
    return res;
};
platesBetweenCandles("***|**|*****|**||**|*", [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]])