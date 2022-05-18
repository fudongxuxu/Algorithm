function demo(str) {
    let arr = str.split('');
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }
    let resArr = Array.from(map);
    resArr.sort((a, b) => {
        if (a[1] !== b[1])
            return b[1] - a[1]

        if (a[1] === b[1])
            return a[0].charCodeAt(0) - b[0].charCodeAt(0)
    })
    console.log('x'.charCodeAt(0), 'X'.charCodeAt(0))
    console.log(resArr);
}
demo('xyxyXX')