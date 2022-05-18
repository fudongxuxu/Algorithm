function demo(str) {
    let arr = str.split(' ')
    let res = []
    goto:
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (j > i && arr[j] > arr[i]) {
                res.push(j);
                continue goto;
            }
        }
        res.push(0);
    }
    console.log(res);
}
demo('123 124 125 121 119 122 126 123')
// 给你一棵根节点为 0 的 二叉树 ，它总共有 n 个节点，节点编号为 0 到 n - 1 。同时给你一个下标从 0 开始的整数数组 parents 表示这棵树，其中 parents[i] 是节点 i 的父节点。由于节点 0 是根，所以 parents[0] == -1 。

// 一个子树的 大小 为这个子树内节点的数目。每个节点都有一个与之关联的 分数 。求出某个节点分数的方法是，将这个节点和与它相连的边全部 删除 ，剩余部分是若干个 非空 子树，这个节点的 分数 为所有这些子树 大小的乘积 。

// 请你返回有 最高得分 节点的 数目 。

//  
