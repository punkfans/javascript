/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    var rt = [];
    var max = 0;
    var count = 1;
    var result = [];

    if(!root) {
        return [];
    }

    rt = helper(root.left).concat([root.val]).concat(helper(root.right));

    function helper(node) {
        if(!node) {
            return [];
        }

        return helper(node.left).concat([node.val]).concat(helper(node.right));

    }
    rt.push(null);
    result.push(rt[0]);
    console.log(rt);

    for(var i = 1; i < rt.length; i++) {
        if(rt[i] === rt[i - 1]) {
            count++;
        }else {
            if(count > max) {
                result = [rt[i - 1]];
                max = count;
            }else if(count === max) {
                result.push(rt[i - 1])
            }

            count = 1;
        }
        console.log(result);
    }

    return result;
};

var a = {val: 1, left: null, right: {val: 2, left: {val: 2, left: null, right: null}, right: null}};
var b = {val: 1, left: null, right: {val: 2, left: null, right: null}};
console.log(findMode(b));