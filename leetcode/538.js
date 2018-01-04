/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    var sumOfAllNodesGreaterThanCurrentNode = 0;

    convert(root);

    return root;

    function convert(node) {
        if(!node) {
            return;
        }

        convert(node.right);
        node.val += sumOfAllNodesGreaterThanCurrentNode;
        sumOfAllNodesGreaterThanCurrentNode = node.val;
        convert(node.left);
    }
};