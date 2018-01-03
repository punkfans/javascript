/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var sortedArray = [];
    var rt = [];
    for(var i in nums) {
        sortedArray.push(nums[i]);
    }

    sortedArray.sort(function (a, b) { return b - a });

    for(var j in nums) {
        var index = sortedArray.indexOf(nums[j]);
        var rank = '';
        switch(index) {
            case 0:
                rank = 'Gold Medal';
                break;
            case 1:
                rank = 'Silver Medal';
                break;
            case 2:
                rank = 'Bronze Medal';
                break;
            default:
                rank = (index + 1).toString();
        }

        rt.push(rank);
    }

    return rt;
};

console.log(findRelativeRanks([10,3,8,9,4]));