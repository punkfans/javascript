var done = true;

var input = document.getElementById('throttle');
input.addEventListener('keydown', function (e) {
    if(done) {
        done = false;
        setTimeout(function () {
            done = true;
            console.log('Throttle: ' + e.keyCode);
        }, 500);
    }
});