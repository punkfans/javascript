function forEach(iterable, callBack) {
    if(iterable.length) { // if it's array
        for(var i = 0; i < iterable.length; i++) {
            callBack.call(this, iterable[i]);
        }
    }else { // if it's object
        for(var key in iterable) {
            callBack.call(this, iterable[key]);
        }
    }
}

var a = [1, 2, 3];
var b = {a: 1, b: 2, c: 3};
forEach(b, function (item) {
    console.log(item);
});