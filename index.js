angular.module('test', [])
    .controller('myCtrl', ['$scope', function ($scope) {
        $scope.pattern = '';
        $scope.input = '';
        var vm = this;
        vm.test = 'haha';
        vm.shouldShowAddNewPerson = false;

        vm.data = [
            {name: 'David', age: 19},
            {name: 'Nancy', age: 29},
            {name: 'Steven', age: 39},
            {name: 'Mike', age: 27},
            {name: 'Roy', age: 29}
        ];

        vm.toggleAddNewPerson = function () {
            vm.shouldShowAddNewPerson = !vm.shouldShowAddNewPerson;
        };

        vm.addNewPerson = function () {
            vm.toggleAddNewPerson();
            vm.data.push({
                name: vm.newPersonName,
                age: vm.newPersonAge
            });

            vm.newPersonAge = '';
            vm.newPersonName = '';
        }
    }])
    .directive('listOfPeople', function () {
        return {
            restrict: 'E',
            templateUrl: 'listOfPeople.html',
            scope: {
                data: '='
            },
            controller: 'listOfPeopleController',
            controllerAs: 'people'
        }
    })
    .controller('listOfPeopleController', ['$scope', function ($scope) {
        var vm = this;
        vm.data = $scope.data;
        vm.deletePerson = function (index) {
            vm.data.splice(index, 1);
        }
    }]);

var loadingProgress = 0;

var timeInterval = setInterval(function() {
    if(loadingProgress <= 3000) {
        loadingProgress++;
        document.querySelector('progress').value = loadingProgress;
    }else {
        clearInterval(timeInterval);
    }
}, 1);


// debouncing
// var debounceTimer;
// window.addEventListener('mousemove', function(e) {
//     clearTimeout(debounceTimer);
//     debounceTimer = setTimeout(function () {
//         var template = e.pageX + ', ' + e.pageY;
//         document.getElementById('mousePosition').innerHTML = template;
//     }, 300);
// });


//throttle
// var isScheduled = false;
// window.addEventListener('mousemove', function (e) {
//     if(!isScheduled) {
//         isScheduled = true;
//         setTimeout(function () {
//             var template = e.pageX + ', ' + e.pageY;
//             document.getElementById('mousePosition').innerHTML = template;
//             isScheduled = false;
//         }, 600);
//     }
// });