/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/**
 * for each node, length = max(left) + max(right) + 2
 * keep track of the longest length when traversing the tree
 *  function max(node) ===> 1. computes the length that go through the current node, update longest length  2. return the max length max(left, right) + 1
 *
 * **/
var diameterOfBinaryTree = function(root) {
    if(!root) {
        return 0;
    }
    var rt = 0;
    maxLength(root);

    function maxLength(node) {
        if(!node) {
            return 0;
        }

        var left = maxLength(node.left);
        var right = maxLength(node.right);
        var currentNodeLength = left + right + 1;
        if(currentNodeLength > rt) {
            rt = currentNodeLength;
        }

        return Math.max(left, right) + 1;
    }

    return rt - 1;
};

function test(a) {
    a = 6;
}

var c = {a: 5};
var b = 4;
//test(b);
test(c);
console.log(b);
console.log(c);