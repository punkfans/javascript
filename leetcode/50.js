/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    if(n > 0) {
        return x * pow(x, n - 1);
    }else {
        return 1 / pow(x , -n);
    }

    function pow(num, power) {
        if(power === 0) {
            return 1;
        }

        var temp = pow(num, Math.floor(power / 2));

        if(power % 2 === 0) {
            return temp * temp;
        }else {
            return temp * temp * num;
        }
    }
};

console.log(myPow(1.00001, 123456));