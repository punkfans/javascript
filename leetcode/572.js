/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(!s) {
        return isSameTree(s, t);
    }

    var queue = [s];

    while(queue.length) {
        if(isSameTree(queue[0], t)) {
            return true;
        }else {
            if(queue[0].left) {
                queue.push(queue[0].left);
            }

            if(queue[0].right) {
                queue.push(queue[0].right);
            }

            queue.shift();
        }
    }

    function isSameTree(n1, n2) {

        if(!n1 || !n2) {
            return n1 === n2;
        }

        if(n1.val !== n2.val) {
            return false;
        }

        return isSameTree(n1.left, n2.left) && isSameTree(n1.right, n2.right);
    }

    return false;
};

var a = {val: 3, left: {val: 4, left: {val: 1, left: null, right: null}, right: {val: 2, left: null, right: null}}, right: {val: 5, left: null, right: null}};
var b = {val:4, left: {val: 1, left: null, right: null}, right: {val: 2, left: null, right: null}};

console.log(isSubtree(a, b));