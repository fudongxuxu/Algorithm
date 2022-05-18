const fs = require('fs') // 引入fs模块.
let data = fs.readFileSync('./1.txt', { encoding: 'utf-8' });
var lines = data.split("\n");
var strL = ''
var strJ = ''

let deck = {
    'A': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    "K": 10
}
lines.forEach((item) => {
    let Leon = [], Judy = [];
    Leon = item.split(';')[0];
    Judy = item.split(';')[1];
    let lArr = [], jArr = [];
    for (let i = 0; i < Leon.length; i++) {
        let s = Leon[i]
        if (s === '1') {
            s = '10'
        }
        if (deck[s]) {
            lArr.push(deck[s])
        }
    }
    for (let i = 0; i < Judy.length; i++) {
        let s = Judy[i]
        if (s === '1') {
            s = '10'
        }
        if (deck[s]) {
            jArr.push(deck[s])
        }
    }

    lArr.sort((a, b) => a - b);
    jArr.sort((a, b) => a - b);
    function handleSum(arr) {
        let res = 0;
        let total = 0;
        for (let k of arr) {
            total += k
        }
        for (let i = 0; i < 5; i++) {
            let sum = 0, left = i + 1, right = 4;
            while (left < right) {
                sum = arr[i] + arr[left] + arr[right];
                if (sum % 10 === 0) {
                    if ((total - sum) > 10) return total - sum - 10
                    return total - sum
                }
                if (sum < 10) {
                    left++;
                } else {
                    right--;
                }
            }
        }
        return 0
    }
    if (handleSum(lArr) < handleSum(jArr)) {
        strJ += item + '\n'
    } else {
        strL += item
    }
})

fs.writeFile('./judy.txt', strJ, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('创建写入文件成功')
})
fs.writeFile('./leon.txt', strL, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('创建写入文件成功')
})