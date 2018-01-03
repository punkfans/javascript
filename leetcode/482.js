/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    var chars = S.split('-').join('');
    var position = chars.length - 1;
    var numOfSegments = Math.ceil(chars.length / K);
    var rt = '';

    for(var j = 0; j < numOfSegments; j++) {
        for(var i = 0; i < K; i++, position--) {
            rt = chars.charAt(position).toUpperCase() + rt;
        }

        if(j !== numOfSegments - 1) {
            rt = '-' + rt;
        }
    }

    return rt;
};

var S = "2-5g-3-J";
var K = 2;

console.log(licenseKeyFormatting(S, K));