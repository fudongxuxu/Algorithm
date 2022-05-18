function demo(arr) {
    arr.sort((a, b) => {
        let arr1 = a.split(':')
        let arr2 = b.split(':')
        if (arr1[0] - arr2[0] !== 0) {
            return arr1[0] - arr2[0]
        } else if (arr1[0] - arr2[0] === 0) {
            if (arr1[1] - arr2[1] !== 0) {
                return arr1[1] - arr2[1]
            } else {
                return arr1[2] - arr2[2]
            }
        }
        
    })
    console.log(arr);
}
demo(['23:41:09.023','23:41:08.23','1:1:09.211','08:01:22.0'])