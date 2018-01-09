for(var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 0);
}

for(var j = 0; j < 5; j++) {
    setTimeout(helper(j), 0);
}

function helper(index) {
    return function () {
        console.log(index);
    }
}