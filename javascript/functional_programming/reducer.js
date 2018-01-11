function reducer(iterable, callBack) {
    var total = 0;
    for(var i = 0; i < iterable.length; i++) {
        total = callBack(total, iterable[i]);
    }

    return total;
};

var a = [1, 2, 4];
var callBack = function(total, current) {
    return total + current;
};

console.log(reducer(a, callBack));