import angular from 'angular';

angular.module('yunity').directive('login', () => {
    return {
        restrict: 'A',
        templateUrl: 'assets/templates/login.html',
        controller: function($scope, $yunityAPI)
        {
            $scope.rememberMeTooltip = {title: 'Remember me'};

    		$scope.submitLoginCredentials = function() {
    			console.log('Remember Me: ', $scope.credentials.rememberMe);
        		$yunityAPI.authenticate($scope.credentials.email, $scope.credentials.password);
    		}
        }
    }
});
