/**
 * @param {number[]} parents
 * @return {number}
 */
//  parents = [-1,2,0,2,0]
// 0,1,2,3,4
class Node {
    constructor(id, left = null, right = null) {
        this.id = null;
        this.leftChild = left;
        this.rightChild = right;
    }
    addChildren(node) {
        if (this.leftChild === null) {
            this.leftChild = node
        } else {
            this.rightChild = node
        }
    }
}
var countHighestScoreNodes = function (parents) {
    let nodeArr = [];
    let maxScrour = 0;
    let ans = 0;
    for (let i = 0; i < parents.length; i++) {
        let node = new Node(i);
        nodeArr.push(node);
    }
    for (let k = 1; k < parents.length; k++) {
        nodeArr[parents[k]].addChildren(nodeArr[k])
    }
    def(nodeArr[0])

    function def(node) {
        if (node === null) {
            return 0
        }
        let leftCount = def(node.leftChild)
        let rightCount = def(node.rightChild)
        let remain = parents.length - leftCount - rightCount - 1
        let scour = help(leftCount) * help(rightCount) * help(remain);
        if (scour === maxScrour) {
            ans++;

        } else if (scour > maxScrour) {
            ans = 1;
            maxScrour = scour
        }
        return leftCount + rightCount + 1
    }
    function help(count) {
        return count === 0 ? 1 : count
    }
    return ans
};