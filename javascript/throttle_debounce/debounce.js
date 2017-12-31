var input = document.getElementById('debounce');

var throttleTimeout;
input.addEventListener('keydown', function (e) {
    clearTimeout(throttleTimeout);
    throttleTimeout = setTimeout(function () {
        console.log('Debounce: ' + e.keyCode);
    }, 1000);
});