/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var rt = [];
    for(var i = 0; i < findNums.length; i++) {
        rt.push(-1);
        var index = nums.indexOf(findNums[i]) + 1;
        for(var j = index; j < nums.length; j++) {
            if(nums[j] > findNums[i]) {
                rt[rt.length - 1] = nums[j];
                break;
            }
        }
    }

    return rt;
};