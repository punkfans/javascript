/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort(function(a, b) { return a - b });
    var rt = 0;
    for(var i = 0; i < nums.length; i += 2) {
        rt += nums[i];
    }

    return rt;
};

console.log(arrayPairSum([3,1,2,4]));