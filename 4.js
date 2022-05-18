function demo(n, l) {
    let start = Math.pow(10, n - 1)
    let end = Math.pow(10, n);
    if (n < 3 || n > 7) {
        return -1
    }
    let count = l;
    let res = [];
    for (let i = start; i < end; i++) {
        let bit = start
        let sum = 0;
        while (bit !== 1) {
            sum += Math.pow(Math.floor(i / bit) % 10, n);
            bit = Math.floor(bit / 10);
        }
        sum += Math.pow(i  % 10, n);

        if (sum === i) {
            res.push(i)
        }

    }
    if (l > res.length) {
        console.log(res[res.length]);
    }
    console.log(res[l]);
}
demo(3, 0)