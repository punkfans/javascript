/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var isFirstLetterCapitalized = (word.charAt(0) === word.charAt(0).toUpperCase());
    var allCapital = isFirstLetterCapitalized;
    var firstLetterCapital = isFirstLetterCapitalized;
    var allSmall = !isFirstLetterCapitalized;

    for(var i = 1; i < word.length; i++) {
        var isCapital = (word.charAt(i) === word.charAt(i).toUpperCase());
        console.log(isCapital);
        allCapital = allCapital && isCapital;
        firstLetterCapital = firstLetterCapital && !isCapital;
        allSmall = allSmall && !isCapital;
    }

    return allSmall || firstLetterCapital || allCapital;
};

console.log(detectCapitalUse('Leetcode'));