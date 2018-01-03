/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    var highestPower = 0;
    var base = 7;
    var rt = num >= 0 ? '' : '-';
    num = Math.abs(num);
    while(base <= num) {
        base = base * 7;
        highestPower++;
    }

    while(highestPower >= 0) {
        var temp = Math.pow(7, highestPower);
        rt += Math.floor(num / temp);
        num = num % temp;
        highestPower--;
    }

    return rt;
};

console.log(convertToBase7(100));