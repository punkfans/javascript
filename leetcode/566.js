/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var rt = [];
    if(r * c !== nums.length * nums[0].length) {
        return nums;
    }

    var flatArray = [];
    for(var i = 0; i < nums.length; i++) {
        for(var j = 0; j < nums[i].length; j++) {
            flatArray.push(nums[i][j]);
        }
    }


    for(var row = 0; row < r; row++) {
        rt.push([]);
        for(var column = 0; column < c; column++) {
            rt[rt.length - 1].push(flatArray[row * c + column]);
        }
    }

    return rt;

};

console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));