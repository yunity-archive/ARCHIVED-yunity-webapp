angular.module('yunity').directive('login', () => {
    return {
        restrict: 'A',
        template: require('./login.html'),
        controller: function($scope, yAPI)
        {
            $scope.rememberMeTooltip = {title: 'Remember me'};

            $scope.credentials = {
            	rememberMe: true // the default value
            };

    		$scope.submitLoginCredentials = function() {
    			console.log('Remember Me: ', $scope.credentials.rememberMe);
        		yAPI.authenticate($scope.credentials.email, $scope.credentials.password);
    		}
        }
    }
});
