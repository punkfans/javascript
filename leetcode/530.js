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
var getMinimumDifference = function(root) {
    var min = Infinity;
    var array = traverseNode(root);
    for(var i = 1; i < array.length; i++) {
        if(array[i] - array[i - 1] < min) {
            min = array[i] - array[i - 1];
        }
    }

    return min;

    // returns an array
    function traverseNode(node) {
        if(!node) {
            return [];
        }
        var left = traverseNode(node.left);
        var right = traverseNode(node.right);

        return left.concat([node.val]).concat(right);
    }
};