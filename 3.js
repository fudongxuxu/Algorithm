function demo(s) {
    let fCode = s.charCodeAt(0);
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        let cCode = s.charCodeAt(i);
        if (cCode <= fCode) {
            index = i;
        }
    }
    let arr = s.split('');
    let temp = arr[index];
    arr[index] = s[0];
    arr[0] = temp;
    console.log(arr.join(''));
    return arr.join('')
}
demo('bcdefa')