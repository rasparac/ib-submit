'use strict';

angular
    .module('example', ['ib-submit'])
    .controller('ExampleController', ExampleController);

ExampleController.$inject = ['$scope', '$http', '$q'];

function ExampleController($scope, $http, $q) {
    $scope.formData = {};

    $scope.sendData = function() {
        console.log("Controller: ExampleController. Method: sendData()");
        return sendData($scope.formData).then(function(res) {
            console.log(res);
            $scope.formData = {};
        });
    }

    function sendData(data) {
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise; 
    }
}