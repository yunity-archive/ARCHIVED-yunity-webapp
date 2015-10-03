angular.module('yunity').directive('login', () => {
    return {
        restrict: 'A',
        templateUrl: 'assets/templates/login.html',
        controller: function($scope, $yunityAPI)
        {
            $scope.rememberMeTooltip = {title: 'Remember me'};

            $scope.credentials = {
            	rememberMe: true // the default value
            };

    		$scope.submitLoginCredentials = function() {
    			console.log('Remember Me: ', $scope.credentials.rememberMe);
        		$yunityAPI.authenticate($scope.credentials.email, $scope.credentials.password);
    		}
        }
    }
});
