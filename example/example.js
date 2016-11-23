'use strict';

angular
    .module('example', ['ib-submit'])
    .controller('ExampleController', ExampleController);

ExampleController.$inject = ['$scope', '$q'];

function ExampleController($scope, $q) {
    $scope.formData = {};

    $scope.sendData = function() {
        console.log("Controller: ExampleController. Method: sendData()");
        return sendData($scope.formData).then(function(res) {
            console.log(res);
        })
    }

    function sendData(data) {
        var deferred = $q.defer();
        setTimeout(function() {
                deferred.resolve(data);
            }, 1000)
        return deferred.promise; 
    }
}