// 输入一个由N个大小写字母组成的字符串
// 按照ASCII码值从小到大进行排序
// 查找字符串中第K个最小ASCII码值的字母(k>=1)
// 输出该字母所在字符串中的位置索引(字符串的第一个位置索引为0)
// k如果大于字符串长度则输出最大ASCII码值的字母所在字符串的位置索引
// 如果有重复字母则输出字母的最小位置索引

// 输入描述
//   第一行输入一个由大小写字母组成的字符串
//   第二行输入k k必须大于0 k可以大于输入字符串的长度

// 输出描述
//   输出字符串中第k个最小ASCII码值的字母所在字符串的位置索引
//   k如果大于字符串长度则输出最大ASCII码值的字母所在字符串的位置索引
//   如果第k个最小ASCII码值的字母存在重复  则输出该字母的最小位置索引

// 示例一
//  输入
//     AbCdeFG
//     3
//  输出
//     5
//  说明
//    根据ASCII码值排序，第三个ASCII码值的字母为F
//    F在字符串中位置索引为5(0为字符串的第一个字母位置索引)

function demo(str, n) {
    let arr = [];
    arr = str.split('');
    arr.sort((a, b) => {
        return a.charCodeAt(0) - b.charCodeAt(0)
    })
    console.log(arr);
    
    console.log(str.split('').indexOf(arr[n-1]));
}
demo('fAdDAkBbBq',4)