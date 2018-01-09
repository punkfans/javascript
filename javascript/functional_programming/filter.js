function filter(iterable, callBack) {
    var result = [];
    for(var i = 0; i < iterable.length; i++) {
        if(callBack(iterable[i])) {
            result.push(iterable[i]);
        }
    }

    return result;
}

var a = [2, 5, 7, 10, 11, 28];
var callBack = function(item) {
    return item % 2 === 0;
};

console.log(filter(a, callBack));