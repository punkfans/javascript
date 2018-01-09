function map(iterable, callBack) {
    var result = [];
    for(var i = 0; i < iterable.length; i++) {
        result.push(callBack.call(this, iterable[i]));
    }

    return result;
}

var a = [1, 2, 3];
var callBack = function(item) {
    return item * 2;
};
console.log(map(a, callBack));