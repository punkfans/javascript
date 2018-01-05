/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var start = 0;
    var sArray = s.split('');

    while(start < s.length) {
        var end = Math.min(start + k - 1, s.length - 1);
        swap(start, end);
        start += k * 2;
    }

    function swap(start, end) {
        while(start < end) {
            var temp = sArray[start];
            sArray[start] = sArray[end];
            sArray[end] = temp;

            start++;
            end--;
        }
    }

    return sArray.join('');

};

console.log(reverseStr('abcdefg', 2));

var s = 'asd';
console.log(s[0]);
s[0] = 'f';
console.log(s[0]);
