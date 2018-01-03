/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var rt = [];
    var map = {q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1, a: 2, s: 2, d: 2, f: 2,g: 2,h: 2,j: 2, k: 2, l: 2, z: 3, x: 3, c: 3, v: 3, b: 3, n: 3, m: 3};
    for(var i in words) {
        var lineNum = map[words[i][0].toLowerCase()];
        var shouldPush = true;
        for(var j = 0; j < words[i].length; j++) {
            if(map[words[i][j].toLowerCase()] !== lineNum) {
                shouldPush = false;
                break;
            }
        }

        if(shouldPush) {
            rt.push(words[i]);
        }
    }

    return rt;
};