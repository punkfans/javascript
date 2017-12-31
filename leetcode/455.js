/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function(a,b) {return a - b});
    s.sort(function(a,b) {return a - b});
    var rt = 0;

    var iG = 0;
    var iS = 0;

    while(iG < g.length && iS < s.length) {
        if(s[iS] >= g[iG]) {
            rt++;
            iS++;
            iG++;
        }else {
            iS++;
        }
    }

    return rt;
};

var g = [10, 9, 8, 7];
var s = [5, 6, 7, 8];

console.log(findContentChildren(g,s));