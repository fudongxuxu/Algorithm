function demo(str) {
    let l = 0;
    let max = 0;
    for (let i = 0; i < str.length; i = l) {
        let r = l;
        while (str[l] === str[r]) {
            r++;

        }

        max = Math.max(r - l , max)
        l = r;
    }
    console.log(max);
}
demo('hello')