/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var a = 0;
    var l = 0;
    for(var i = 0; i < s.length; i++) {
        if(s[i] === 'A') {
            a++;
        }

        if(a > 1) {
            return false;
        }

        if(s[i] === 'L') {
            l++;
        }else {
            l = 0;
        }

        if(l > 2) {
            return false;
        }
    }

    return true;
};