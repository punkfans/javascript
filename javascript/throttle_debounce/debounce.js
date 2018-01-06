var input = document.getElementById('debounce');

var debounceTimeout;
input.addEventListener('keydown', function (e) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(function () {
        console.log('Debounce: ' + e.keyCode);
    }, 1000);
});