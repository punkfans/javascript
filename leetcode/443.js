/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    //chars.sort();
    var start = 0;
    var length = 0;
    var i = 0;
    while(chars[i] !== undefined) {
        if(chars[i] !== chars[start]) {
            if(length > 1) {
                var numArray = length.toString().split('');
                chars.splice(start + 1, length - 1);
                for(var j in numArray) {
                    chars.splice(start + 1, 0, numArray[j]);
                    start++;
                }
                i = i - (length - 2) + (numArray.length - 1);
            }
            start = i;
            length = 1;
        }else {
            length++;
        }
        i++;
    }
    console.log(chars);

    if(length > 1) {
        var numArray = length.toString().split('');
        chars.splice(start + 1, length - 1);
        for(var j in numArray) {
            chars.splice(start + 1, 0, numArray[j]);
            start++;
        }
    }
    //console.log(chars);

    return chars.length;
};

var c = ["a","a","a","b","b","a","a"];
compress(c);
console.log(c);