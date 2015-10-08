/*
 * Controller for full-page functionality.
 * Let's keep this as minimal as possible!
 * No global state unless absolutely necessary!
 */

angular.module('yunity').controller('GlobalController', ['$scope', '$http', ($scope, $html) => {

    let hideMap = false;

    $scope.bodyClass = {
        'map-maximized': true,
    }

    $scope.updateMap = (display) => {
        // display can be either 'maximized', 'minimized', 'hidden'
        $scope.bodyClass = {
            'map-maximized': display === 'maximized',
            'map-minimized': display === 'minimized',
            'map-hidden': display === 'hidden',
        }
    }

    $scope.isUserLoggedIn = true;  // TODO: replace with auth service

    $scope.toggleMap = () => {
        console.log($scope.bodyClass);
        if ($scope.bodyClass['map-maximized']) {
            $scope.updateMap('minimized');
        } else if ($scope.bodyClass['map-minimized']) {
            $scope.updateMap('maximized');
        }
    };

}]);
