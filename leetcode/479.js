/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function(n) {
    if(n === 1) {
        return 9;
    }

    var maxNDigitNum = Math.pow(10, n) - 1;
    var minNDigitNum = Math.floor(maxNDigitNum / 10) + 1;

    var half = Math.floor(maxNDigitNum * maxNDigitNum / Math.pow(10, n));
    var found = false;
    var palindrome;

    while(!found) {
        palindrome = generatePalindrome(half);

        for(var i = maxNDigitNum; i >= minNDigitNum; i--) {
            if(i * i < palindrome) {
                break;
            }

            if(palindrome % i === 0) {
                found = true;
                break;
            }
        }

        half--;
    };

    return palindrome % 1337;

    function generatePalindrome(num) {
        var temp = num;
        var secondHalf = 0;
        while(temp) {
            var currentDigit = temp % 10;
            secondHalf = secondHalf * 10 + currentDigit;
            temp = Math.floor(temp / 10);
        }

        return num * Math.pow(10, n) + secondHalf;
    }
};

console.log(largestPalindrome(7));