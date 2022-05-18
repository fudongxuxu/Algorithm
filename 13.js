function demo(str) {
    let arr = str.split(',')
    arr.sort((a, b) => {
        let len1 = a.length;
        let len2 = b.length;
        if (len1 === len2) {
            return b - a
        }
        let min = Math.min(len1, len2);
        for (let i = 0; i < min; i++) {
            let c1 = a[i];
            let c2 = b[i];
            if (c1 !== c2) {
                return c2 - c1
            }
        }
        if (len1 > len2) {
            return a[0] - a[len1 - 1]
        } else {
            return b[len2 - 1] - b[0]
        }
    })
    console.log(arr);
}
demo('22,221,22')