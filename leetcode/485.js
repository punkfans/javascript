/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var rt = 0;
    var currentLength = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i]) {
            currentLength++;
        }else {
            if(currentLength > rt) {
                rt = currentLength;
            }
            currentLength = 0;
        }

        if(i === nums.length - 1 && currentLength > rt) {
            rt = currentLength;
        }
    }

    return rt;
};