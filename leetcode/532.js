/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    var rt = 0;
    var map = {};
    nums.sort(function (a, b) { return a - b });
    console.log(nums);
    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++) {
            if(nums[j] - nums[i] === k && !map[nums[i]]) {
                rt++;
                map[nums[i]] = true;
                break;
            }
        }
    }

    return rt;
};

console.log(findPairs([-1, -2, -3], 1));