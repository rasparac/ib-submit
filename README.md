# ib-submit
Simple angular directive which prevents users from repeatedly clicking a button.

# Install
* Using bower and running `bower install ib-submit`

#How to add to the project
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
````
##HTML
````html
	<form
		name="myForm"
		role="form"
		ib-submit
		after-submit-text="'Save!!!'"
		submit-action="sendData()">
    </form>
````
