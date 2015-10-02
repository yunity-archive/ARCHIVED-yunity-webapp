import angular from 'angular';

angular.module('yunity').controller('LoginCtrl', ['$scope', '$yunityAPI', function($scope, $yunityAPI) {

        $scope.submitLoginCredentials = function() {
            $yunityAPI.authenticate($scope.email, $scope.password);
        }

    }]);