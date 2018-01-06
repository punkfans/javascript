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
var findTilt = function(root) {
    var rt = 0;
    sum(root);
    return rt;

    function sum(node) {

        if(!node) {
            return 0;
        }

        var left = sum(node.left);
        var right = sum(node.right);

        rt += Math.abs(left - right);

        return node.val + left + right;
    }
};

