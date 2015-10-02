import angular from 'angular';

angular.module('yunity').config(function($tooltipProvider) {
  angular.extend($tooltipProvider.defaults, {
    html: true
  });
})

angular.module('yunity').controller('LoginCtrl', ['$scope', '$yunityAPI', function($scope, $yunityAPI) {

	$scope.rememberMeTooltip = {title: 'Remember me'};

    $scope.submitLoginCredentials = function() {
    	console.log('Remember Me: ', $scope.credentials.rememberMe);
        $yunityAPI.authenticate($scope.credentials.email, $scope.credentials.password);
    }

    }]);