# ib-submit
Simple angular directive which prevents users from repeatedly clicking a button.

# Install
* Using bower and running `bower install ib-submit`

#How to add to the project
````html
	<script type="text/javascript" src="../bower_components/ib-submit/ib-submit.js"></script>
````

````javascript
	angular.module('app', ['ib-submit']);
````

#Code example
Your function must return promise!

## Javascript code
````javascript
	$scope.sendData = function() {
        return sendData($scope.formData).then(function(res) {
            $scope.formData = {};
        });
    };

    function sendData(data) {
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise; 
    }
````
##HTML
````html
	<button
		ib-submit
		after-submit-text="Button Text"
		submit-action="sendData()"
    >Submit
    </button>
````
