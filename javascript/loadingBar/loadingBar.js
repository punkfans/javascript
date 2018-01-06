var barArray = [];
var currentIndex = 0;

var button = document.getElementById('button');
var container = document.getElementById('container');
var progress = document.getElementById('progressBar');
button.addEventListener('click', function () {
    var bar = progress.cloneNode(true);
    bar.setAttribute('class', '');
    barArray.push(bar);
    container.appendChild(bar);
    setTimeout(function () {
        var nextBar = barArray[currentIndex + 1];
        if(nextBar) {
            nextBar.firstChild.setAttribute('class', 'bar start');
        }
    }, 3000);
    currentIndex++;
});