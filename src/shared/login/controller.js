import angular from 'angular';

// angular.module('yunity').config(function($tooltipProvider) {
//   angular.extend($tooltipProvider.defaults, {
//     html: true
//   });
// })

angular.module('yunity').controller('LoginCtrl', ['$scope', 'yAPI', function($scope, yAPI) {

	$scope.rememberMeTooltip = {title: 'Remember me'};

    $scope.submitLoginCredentials = function() {
    	console.log('Remember Me: ', $scope.credentials.rememberMe);
        yAPI.authenticate($scope.credentials.email, $scope.credentials.password);
    }

    }]);
